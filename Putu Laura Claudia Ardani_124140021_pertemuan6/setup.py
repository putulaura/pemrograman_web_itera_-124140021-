from setuptools import setup, find_packages

setup(
    name='pyramid_mahasiswa',
    version='0.0',
    description='Aplikasi REST API Mahasiswa dan Matakuliah',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'pyramid',
        'pyramid_tm',
        'waitress',
        'SQLAlchemy',
        'zope.sqlalchemy',
        'alembic',
    ],
    extras_require={'testing': ['pytest', 'webtest']},
    entry_points={
        'paste.app_factory': [
            'main = pyramid_mahasiswa:main',
        ],
    },
)
