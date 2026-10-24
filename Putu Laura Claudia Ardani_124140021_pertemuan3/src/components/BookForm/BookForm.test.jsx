import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import BookForm from "./BookForm";

describe("BookForm", () => {
  it("menampilkan form tambah buku", () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByText("Tambah buku baru")).toBeInTheDocument();
  });
  it("memberi pesan kalau kolom wajib kosong", () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "Tambah buku" }));
    expect(
      screen.getByText("Judul dan nama penulis harus diisi dulu."),
    ).toBeInTheDocument();
  });
  it("mengirim data buku yang diisi", () => {
    const onSave = vi.fn();
    render(<BookForm onSave={onSave} onCancel={vi.fn()} />);
    fireEvent.change(screen.getByPlaceholderText("Contoh: Cinderella"), {
      target: { value: "Bumi" },
    });
    fireEvent.change(screen.getByPlaceholderText("Nama penulis"), {
      target: { value: "Tere Liye" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Tambah buku" }));
    expect(onSave).toHaveBeenCalledWith({
      title: "Bumi",
      author: "Tere Liye",
      status: "milik",
    });
  });
  it("bisa memilih status buku", () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    fireEvent.change(screen.getByLabelText("Status"), {
      target: { value: "baca" },
    });
    expect(screen.getByLabelText("Status").value).toBe("baca");
  });
  it("menampilkan tombol batal saat sedang edit", () => {
    render(
      <BookForm
        onSave={vi.fn()}
        onCancel={vi.fn()}
        editingBook={{
          id: 1,
          title: "Bumi",
          author: "Tere Liye",
          status: "baca",
        }}
      />,
    );
    expect(
      screen.getByRole("button", { name: "Batal edit" }),
    ).toBeInTheDocument();
  });
});
