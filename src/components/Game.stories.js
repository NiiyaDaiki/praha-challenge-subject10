import React from 'react';
import { Game } from './Game';
import '../index.css';

export default {
  component: Game, // コンポーネント自体
  title: 'Game', // Storybookのサイドバーにあるコンポーネントを参照する方法
};

// コンポーネントにストーリーが複数連なっているので,
// 各ストーリーを単一の Template 変数に割り当てる
const Template = (args) => <Game {...args} />;

// Gameに対するテスト用の状態を書いていく
export const Start = Template.bind({});
Start.args = {
  history: [{ squares: ['', '', '', '', '', '', '', '', ''] }],
  stepNumber: 0,
  xIsNext: true,
};

export const XWin = Template.bind({});
XWin.args = {
  history: [
    { squares: Array(9).fill(null) },
    { squares: ['X', null, null, null, null, null, null, null, null] },
    { squares: ['X', 'O', null, null, null, null, null, null, null] },
    { squares: ['X', 'O', null, 'X', null, null, null, null, null] },
    { squares: ['X', 'O', 'O', 'X', null, null, null, null, null] },
    { squares: ['X', 'O', 'O', 'X', null, null, 'X', null, null] },
  ],
  stepNumber: 5,
  xIsNext: false,
};

export const OWin = Template.bind({});
OWin.args = {
  history: [
    { squares: Array(9).fill(null) },
    { squares: ['O', null, null, null, null, null, null, null, null] },
    { squares: ['O', 'X', null, null, null, null, null, null, null] },
    { squares: ['O', 'X', null, 'O', null, null, null, null, null] },
    { squares: ['O', 'X', 'X', 'O', null, null, null, null, null] },
    { squares: ['O', 'X', 'X', 'O', null, null, 'O', null, null] },
  ],
  stepNumber: 5,
  xIsNext: false,
};

export const Draw = Template.bind({});
Draw.args = {
  history: [
    { squares: Array(9).fill(null) },
    { squares: ['X', null, null, null, null, null, null, null, null] },
    { squares: ['X', 'O', null, null, null, null, null, null, null] },
    { squares: ['X', 'O', 'X', null, null, null, null, null, null] },
    { squares: ['X', 'O', 'X', 'X', null, null, null, null, null] },
    { squares: ['X', 'O', 'X', 'X', 'O', null, null, null, null] },
    { squares: ['X', 'O', 'X', 'X', 'O', 'X', null, null, null] },
    { squares: ['X', 'O', 'X', 'X', 'O', 'X', 'O', null, null] },
    { squares: ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', null] },
    { squares: ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'O'] },
  ],
  stepNumber: 9,
  xIsNext: false,
};
