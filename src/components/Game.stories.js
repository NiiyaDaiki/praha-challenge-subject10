import React from 'react';
import Game from './Game';
import '../index.css';

export default {
  component: Game, // コンポーネント自体
  title: 'Game', // Storybookのサイドバーにあるコンポーネントを参照する方法
};

// コンポーネントにストーリーが複数連なっているので,
// 各ストーリーを単一の Template 変数に割り当てる
const Template = (args) => <Game {...args} />;

// Gameに対する3つのテスト用の状態を書いていく
export const Start = Template.bind({});
Start.args = {
  history: [{ squares: ['', '', '', '', '', '', '', '', ''] }],
  stepNumber: 0,
  xIsNext: true,
};

export const MaxHistory = Template.bind({});
MaxHistory.args = {
  history: [
    { squares: Array(9).fill(null) },
    { squares: [null, null, 'X', null, null, null, null, null, null] },
    { squares: [null, null, 'X', null, null, 'O', null, null, null] },
    { squares: [null, null, 'x', null, null, 'O', null, null, 'X'] },
    { squares: [null, null, 'x', null, null, 'O', null, 'O', 'X'] },
    { squares: [null, null, 'x', null, 'x', 'O', null, 'O', 'X'] },
    { squares: ['O', null, 'x', null, 'x', 'O', null, 'O', 'X'] },
    { squares: ['O', 'x', 'x', null, 'x', 'O', null, 'O', 'X'] },
    { squares: ['O', 'x', 'x', 'O', 'x', 'O', null, 'O', 'X'] },
    { squares: ['O', 'x', 'x', 'O', 'x', 'O', 'X', 'O', 'X'] },
  ],
  stepNumber: 9,
  xIsNext: false,
};

export const PlayerX = Template.bind({});
PlayerX.args = {
  xIsNext: true,
};

export const PlayerO = Template.bind({});
PlayerO.args = {
  xIsNext: true,
};
