import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../modal.css';
import { loginApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

Modal.setAppElement("#root");

export interface idCaptureType {
    idCapture: number
    idCaptureName: string
    idCaptureImage: string
}

export function ModalInfosPokemon({ idCapture, idCaptureName, idCaptureImage }: idCaptureType) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [valueLocalCapture, setValueLocalCapture] = useState('');
  const [valueAlimenta, setValueAlimenta] = useState('');
  const [valueAtaque, setValueAtaque] = useState('');
  const [valueFraque, setValueFraque] = useState('');
  const [valueHabitat, setValueHabitat] = useState('');

  const navigate = useNavigate();

  async function openModal() {
    setIsOpen(true);
    console.log(idCaptureName);
    console.log(idCapture);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleInsertInfoCapture() {
    const datateste = {
      _id: idCapture,
      email: localStorage.getItem('email'),
      habitat: valueHabitat,
      local_captura: valueLocalCapture,
      alimentacao: valueAlimenta,
      fraquezas: valueFraque,
      ataques: valueAtaque
    }

    const response = await loginApi.put('/teste', datateste);
    if(response) {
      toast.success('Valores Inseridos com Sucesso!');
      navigate('/capturePokemons');
    }
    return console.log('fez a requisição', response);
  }

  return (
    <div className="ease-in duration-300">
      <div className="flex">
        <button
          onClick={openModal}
          className={`w-32 h-10 bg-[#1C1F2A] text-xs ease-in duration-200 hover:bg-green-900 text-white rounded-md`}
        >
          Inserir Observações 
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="mymodal2"
        overlayClassName="myoverlay2"
        closeTimeoutMS={200}
      >
        <main className="w-full max-w-[700px] p-7 rounded font-fontPopping">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center flex-col items-center mb-5">
              <span className="mb-2 text-white text-lg">Pokémon: {idCaptureName}</span>
              <img src={idCaptureImage} alt="" className="h-36 w-36" />
            </div>
            <span className="mt-1 mb-1 text-white">Habitat</span>
            <input
              placeholder="Digite aqui..."
              className="border border-zinc-100 outline-none bg-slate-100 h-7 rounded-md p-2"
              onChange={(e) => setValueHabitat(e.target.value)}
            />
            <span className="mt-1 mb-1 text-white">Local de Captura</span>
            <input
              placeholder="Digite aqui..."
              className="border border-zinc-100 outline-none bg-slate-100 h-7 rounded-md p-2"
              onChange={(e) => setValueLocalCapture(e.target.value)}
            />
            <span className="mt-1 mb-1 text-white">Formas de alimentação</span>
            <input
              placeholder="Digite aqui..."
              className="border border-zinc-100 outline-none bg-slate-100 h-7 rounded-md p-2"
              onChange={(e) => setValueAlimenta(e.target.value)}
            />
            <span className="mt-1 mb-1 text-white">Ataque</span>
            <input
              placeholder="Digite aqui..."
              className="border border-zinc-100 outline-none bg-slate-100 h-7 rounded-md p-2"
              onChange={(e) => setValueAtaque(e.target.value)}
            />
            <span className="mt-1 mb-1 text-white">Fraqueza</span>
            <input
              placeholder="Digite aqui..."
              className="border border-zinc-100 outline-none bg-slate-100 h-7 rounded-md p-2"
              onChange={(e) => setValueFraque(e.target.value)}
            />
            <div className="flex items-center justify-center mt-7" onClick={handleInsertInfoCapture}>
              <button className="w-44 h-11 bg-blue-700 text-white text-xs rounded-md transition-all ease-in duration-300 hover:bg-blue-900">
                Inserir Observações
              </button>
            </div>
          </div>
        </main>
      </Modal>
    </div>
  );
}