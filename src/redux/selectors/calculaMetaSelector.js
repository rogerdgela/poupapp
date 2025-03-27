import { createSelector } from "@reduxjs/toolkit";

const getOrcamentoDiario = (state) => state.meta.orcamentoDiario;
const getRendaMensal = (state) => state.meta.renda;
const getObjetivoFinanceiro = (state) => state.meta.objetivoFinanceiro;

export const calculaMetaSelector = createSelector(
    [getOrcamentoDiario, getRendaMensal, getObjetivoFinanceiro],
    (orcamentoDiario, rendaMensal, objetivoFinanceiro) => {
        const metas = {
            economizar: rendaMensal * 0.2,
            investir: rendaMensal * 0.15,
            "controlar-gastos": rendaMensal * 0.8,
        };

        const meta = metas[objetivoFinanceiro] || 0;

        if (objetivoFinanceiro === "controlar-gastos") {
            return (((meta - orcamentoDiario) / meta) * 100).toFixed(2);
        }

        return meta ? ((orcamentoDiario / meta) * 100).toFixed(2) : 0;
    }
);

