import { render, screen } from "@testing-library/react";
import Post from "..";

describe("testar o componente", () => {
  test("Deve renderizar corretamente", () => {
    render(<Post imageUrl="https://via.placeholder.com/200x200">teste</Post>);
    expect(screen.getByText("teste")).toBeInTheDocument();

    const imagemPost = screen.getByAltText("miniatura do Batmóvel");
    expect(imagemPost).toBeInTheDocument();
    expect(imagemPost).toHaveAttribute("src", "https://via.placeholder.com/200x200");
  });
});
