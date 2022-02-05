import React from 'react';
import Board from './Board';
import '../index.css';

export default {
  component: Board, // コンポーネント自体
  title: 'Board', // Storybookのサイドバーにあるコンポーネントを参照する方法
};

// コンポーネントにストーリーが複数連なっているので,
// 各ストーリーを単一の Template 変数に割り当てる
const Template = (args) => <Board {...args} />;

// Boardに対するテスト用の状態を書いていく
export const Default = Template.bind({});
Default.args = {
  squares: Array(9).fill(null),
};

export const FillX = Template.bind({});
FillX.args = {
  squares: Array(9).fill('X'),
};

export const FillO = Template.bind({});
FillO.args = {
  squares: Array(9).fill('O'),
};

export const FillTriangle = Template.bind({});
FillTriangle.args = {
  squares: Array(9).fill('▲'),
};

export const FillThreeShape = Template.bind({});
FillThreeShape.args = {
  squares: ['X', 'O', '▲', 'O', 'X', '▲', 'O', '▲', 'X'],
};

// ['X', 'O', '▲']のうちランダムな値でボードを埋めるストーリーを作成。
// ランダムで生成するとスナップショットテストが落ちるので固定値に変える
// const shape = ['X', 'O', '▲'];
// const getRandomShape = () => {
//   return shape[Math.floor(Math.random() * shape.length)];
// };
// export const FillRandom = Template.bind({});
// FillRandom.args = {
//   squares: Array(9)
//     .fill()
//     .map(() => getRandomShape()),
// };
