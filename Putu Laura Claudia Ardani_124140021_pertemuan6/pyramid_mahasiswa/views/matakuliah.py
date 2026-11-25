from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah


def validasi_angka(nilai):
    if isinstance(nilai, bool):
        return None
    try:
        angka = int(nilai)
    except (ValueError, TypeError):
        return None
    if angka <= 0:
        return None
    return angka


@view_config(route_name='matakuliah_list', renderer='json')
def matakuliah_list(request):
    matakuliahs = request.dbsession.query(Matakuliah).order_by(Matakuliah.id.asc()).all()
    return {'matakuliahs': [m.to_dict() for m in matakuliahs]}


@view_config(route_name='matakuliah_detail', renderer='json')
def matakuliah_detail(request):
    matakuliah_id = request.matchdict['id']
    matakuliah = request.dbsession.query(Matakuliah).filter_by(id=matakuliah_id).first()
    if matakuliah is None:
        return HTTPNotFound(json_body={'error': f'Matakuliah dengan ID {matakuliah_id} tidak ditemukan'})
    return {'matakuliah': matakuliah.to_dict()}


@view_config(route_name='matakuliah_add', request_method='POST', renderer='json')
def matakuliah_add(request):
    try:
        json_data = request.json_body
        for field in ['kode_mk', 'nama_mk', 'sks', 'semester']:
            if field not in json_data or json_data[field] == '':
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi!'})

        if not isinstance(json_data['kode_mk'], str) or not json_data['kode_mk'].strip():
            return HTTPBadRequest(json_body={'error': 'Kode matakuliah tidak valid'})
        if not isinstance(json_data['nama_mk'], str) or not json_data['nama_mk'].strip():
            return HTTPBadRequest(json_body={'error': 'Nama matakuliah tidak valid'})

        sks = validasi_angka(json_data['sks'])
        semester = validasi_angka(json_data['semester'])
        if sks is None or semester is None:
            return HTTPBadRequest(json_body={'error': 'SKS dan semester harus berupa angka positif'})

        matakuliah = Matakuliah(
            kode_mk=json_data['kode_mk'],
            nama_mk=json_data['nama_mk'],
            sks=sks,
            semester=semester,
        )
        request.dbsession.add(matakuliah)
        request.dbsession.flush()
        return {'success': True, 'matakuliah': matakuliah.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def matakuliah_update(request):
    matakuliah_id = request.matchdict['id']
    matakuliah = request.dbsession.query(Matakuliah).filter_by(id=matakuliah_id).first()
    if matakuliah is None:
        return HTTPNotFound(json_body={'error': f'Matakuliah dengan ID {matakuliah_id} tidak ditemukan'})

    try:
        json_data = request.json_body
        if 'kode_mk' in json_data:
            if not isinstance(json_data['kode_mk'], str) or not json_data['kode_mk'].strip():
                return HTTPBadRequest(json_body={'error': 'Kode matakuliah tidak valid'})
            matakuliah.kode_mk = json_data['kode_mk']
        if 'nama_mk' in json_data:
            if not isinstance(json_data['nama_mk'], str) or not json_data['nama_mk'].strip():
                return HTTPBadRequest(json_body={'error': 'Nama matakuliah tidak valid'})
            matakuliah.nama_mk = json_data['nama_mk']
        if 'sks' in json_data:
            sks = validasi_angka(json_data['sks'])
            if sks is None:
                return HTTPBadRequest(json_body={'error': 'SKS harus berupa angka positif'})
            matakuliah.sks = sks
        if 'semester' in json_data:
            semester = validasi_angka(json_data['semester'])
            if semester is None:
                return HTTPBadRequest(json_body={'error': 'Semester harus berupa angka positif'})
            matakuliah.semester = semester
        return {'success': True, 'matakuliah': matakuliah.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def matakuliah_delete(request):
    matakuliah_id = request.matchdict['id']
    matakuliah = request.dbsession.query(Matakuliah).filter_by(id=matakuliah_id).first()
    if matakuliah is None:
        return HTTPNotFound(json_body={'error': f'Matakuliah dengan ID {matakuliah_id} tidak ditemukan'})
    request.dbsession.delete(matakuliah)
    return {'success': True, 'message': f'Matakuliah dengan ID {matakuliah_id} berhasil dihapus'}
