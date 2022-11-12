import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cale from "./croppped/cale.png";
import trini from "./croppped/trini.png";
import rika from "./croppped/rika.png";
import zandri from "./croppped/zandri.png";
import pei from "./croppped/pei.png";
import novan from "./croppped/novan.png";
import nia from "./croppped/nia.png";
import w from "./croppped/w.png";
import m from "./croppped/m.png";

const data = [
  { name: "Pnt. Mark Charles Lepar, SE", title: "Ketua", img: cale },
  { name: "Pnt. Lazandri Batasina, S.Ked", title: "Sekretaris", img: zandri },
  { name: "Chiquita Elrika Masengi, S.Psi", title: "Bendahara", img: rika },
  { name: "Novanto Polii, S.Ked", title: "Wakil Ketua", img: novan },
  { name: "Joy Herbert Rompas, S.Kom", title: "Wakil Sekretaris", img: zandri },
  { name: "Pnt. Feri Frengki Malonda", title: "Anggota", img: pei },
  { name: "Christania Assa, SKM", title: "Anggota", img: nia },
  { name: "Trini Indira Maria Rompas", title: "Anggota", img: trini },
  { name: "Carlos N. Pusung, S.Tr.M", title: "Anggota", img: m },
  { name: "Defra Londa", title: "Anggota", img: zandri },
  { name: "Pnt. Friske Karuh", title: "Anggota", img: w },
];

data.map(e => {
    e.imgColor = Math.floor(Math.random()*16777215).toString(16);
})

const Komisi = () => {
  return (
    <div className="mt-5 pt-3">
      <div className="d-flex justify-content-center mt-3">
        <h1  className="p-3 komisi-title"  style={{border: '3px solid'}}>
          Komisi Remaja Pucuk Pimpinan KGPM Periode 2022
        </h1>
      </div>
      <div className="d-flex mt-3 justify-content-center flex-wrap container">
        {data.map((e, i) => {
          if (i % 2 === 0) {
            return (
              <div
                className="d-flex align-items-center justify-content-center py-3"
                style={{
                  height: "15rem",
                  width: "100%",
                  backgroundColor: '#dcfce7',
                }}
              >
                <div>
                  <div className="d-flex justify-content-end">
                  <h4 style={{fontSize: '1.5rem', }}>{e.name}</h4>
                  </div>
                  <div className="d-flex justify-content-end">
                  <h1 style={{fontFamily: 'Roboto', fontWeight: 'bold'}}>{e.title}</h1>
                  </div>
                </div>
                <img src={e.img} alt="" style={{ height: "14rem" }} />
              </div>
            );
          } else {
            return (
                <div
                className="d-flex align-items-center justify-content-center py-3"
                style={{
                  height: "15rem",
                  width: "100%",
                  backgroundColor: '#fef9c3',
                }}
              >
                <img src={e.img} alt="" style={{ height: "14rem" }} />
                <div>
                  <div className="d-flex justify-content-start flex-wrap">
                    <h4 style={{fontSize: '1.5rem', }}>{e.name}</h4>
                  </div>
                  <div className="d-flex justify-content-start">
                  <h1 style={{fontFamily: 'Roboto', fontWeight: 'bold', }}>{e.title}</h1>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Komisi;
