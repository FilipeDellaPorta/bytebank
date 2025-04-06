import { EnumTransacao } from '../enums/EnumTransacao.js';

export type TypeTransacao = {
  tipoTransacao: EnumTransacao;
  valor: number;
  data: Date;
};
