import React from "react";
import Header from "../../components/Header";
import Chart from "../../components/Chart";
import Card from '../../components/Card'
import Menu from '../../components/Menu'
import {products, sales} from './data'


import './style.scss';

const Home = () => {

    return (
      <main>
        <Menu/>   
      <div className="geral">
         <Header page="Visão Geral" />
      <div className="geral-container">
        <div className="geral-cards">
          <Card titulo="Total de Lojas" valor="7213" />
          <Card titulo="Faturamento total" valor="100.000,00" />
          <Card titulo="Loja destaque" valor="Estilo Pri" />
          <Card titulo="Meta Mensal" valor="110.000,00" />
        </div>
        <div className="geral-content">
          <div className="geral-chart">
            <h3 className="geral-chart-title">Total de faturamento mensal</h3>
            <span className="geral-chart-mounth">JULHO 2020</span>
              <Chart />
          </div>
          <div className="geral-details">
            <div className="geral-details-data">
              <span className="geral-details-label">Loja</span>
              <h3 className="geral-details-title">Estilo Pri</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Mês</span>
              <h3 className="geral-details-title">Julho</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Ano</span>
              <h3 className="geral-details-title">2020</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Total de faturamento</span>
              <h3 className="geral-details-title">R$ 45.000,00</h3>
            </div>
            <div className="geral-details-data">
              <span className="geral-details-label">Análise comparativa</span>
              <h3 className="geral-details-title">Positivo</h3>
            </div>
          </div>
        </div>


        <div className="geral-sales">


          <div className="table">
            <div className="table-header">
              <div className="table-header-box">
                <h3 className="table-header-tittle">Total de compras</h3>
                <span className="table-header-value">Valor geral: 13.250,00</span>
              </div>
              <select className="table-header-data">
                <option>
                  Semanal
                </option> 
                <option>
                  Diário
                </option> 
                <option>
                  Mensal
                </option> 
              </select>
            </div>
            <div className="table-main">
              {
                sales.map((item, index) => (
                  <tr className="table-main-box" key={index}>
                    <td className="table-main-box-loja">{item.store}</td>
                    <td className="table-main-box-item">{item.sales}</td>
                    <td className="table-main-box-item table-main-box-item-align">{item.price}</td>
                  </tr>
                ))
              }
            </div>
          </div>

          
            <table className="table">
              <tr className="table-header">
                <th>Produto</th>
                <th>Loja</th>
                <th>Preço</th>
                <th>Data</th>
              </tr>
              <tbody className="table-main">
              {
                products.map((item, index) => (
                  <tr className="table-main-box"  key={index}>
                    <td className="table-main-box-item">{item.product}</td>
                    <td className="table-main-box-item">{item.store}</td>
                    <td className="table-main-box-item">
                      <span className="table-main-box-item bg-blue">{item.price}</span>
                    </td>
                    <td className="table-main-item">
                      <span className="table-main-box-item bg-yellow">{item.data}</span>
                    </td>
                  </tr>
                ))
              }
                </tbody>

            </table>
          
        </div>
      </div>
      </div>
      </main>
    );
  };
  
  export default Home ;