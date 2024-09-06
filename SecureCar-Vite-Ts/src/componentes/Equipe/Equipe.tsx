import React from 'react';
import CardEquipe from "./CardEquipe/CardEquipe";
import {ListaEquipe} from "./equipe"

export default function Equipe(){
  return (
    <div className="max-w-screen-xl p-6 min-h-96 flex flex-col m-auto">
      <h3 className="text-5xl py-4">Equipe</h3>
      {ListaEquipe.map((membro, idx) => <CardEquipe key={idx} {...membro} />)}
    </div>
  )
}
