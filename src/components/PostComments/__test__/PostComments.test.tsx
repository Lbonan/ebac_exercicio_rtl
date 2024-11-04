import { render, screen, fireEvent } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve conter 2 comentários", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("comentario"), {
      target: {
        value: "Comentário 1",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));

    fireEvent.change(screen.getByTestId("comentario"), {
      target: {
        value: "Comentário 2",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentar"));

    expect(screen.getAllByTestId("lista-de-comentario")).toHaveLength(2);
  });
});
