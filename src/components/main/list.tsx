"use client";

import { useState } from "react";

const Input: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setItem(inputValue);
  };

  const Submit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //Validação
    if (!item.trim() || !value.trim()) {
        return;
    }

    //Se estiver no modo de edição
    if (editingIndex !== null) {
      const updatedItems = [...items]; // Cópia do último estado do items
      updatedItems[editingIndex] = item; // Pega a cópia do item dentro do array com o index alocado no estado editingIndex
      setItems(updatedItems); // Atualiza o estado do array items
      setEditingIndex(null);
    } else {
      setItems((prevItems) => [...prevItems, item]);
    }

    setValue("");
  };

  const Edit = (index: number) => {
    setValue(items[index]);
    setEditingIndex(index); // Ativa modo de edição
  };

  const Delete = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <ul className="overflow-auto h-96 bg-white p-5">
        {items.map((item, index) => (
          <li key={index} className="flex justify-around border-b border-red-600 p-5">
            {editingIndex === index ? (
              <input
                type="text"
                value={value}
                onChange={handleInput}
                className="w-16 text-center"
              />
            ) : (
              <p className="w-16 text-center">{item}</p>
            )}

            <div>
              <svg
                onClick={() => Delete(index)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                className="cursor-pointer float-right ml-2 bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
              </svg>

              <svg
                onClick={() => Edit(index)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="black"
                className="cursor-pointer float-right bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>

      <form onSubmit={Submit} className="flex justify-center items-center">
        <input
          onChange={handleInput}
          value={value}
          className="rounded-full p-2"
          type="text"
          placeholder='Digite aqui o que quer adicionar...'
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="white"
          className="border border-zinc-900 border-4 rounded-lg bg-red-600 p-1 cursor-pointer m-2 bi bi-send-plus-fill"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
        </svg>
      </form>
    </div>
  );
};

export default Input;
