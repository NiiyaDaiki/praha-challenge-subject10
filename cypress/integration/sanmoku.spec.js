describe('三目並べのテスト', () => {
  // それぞれのテスト前にルートパスにアクセス
  beforeEach(() => {
    cy.visit('/');
  });

  it('Xが勝つテスト', () => {
    // ボードの左上から順にX,Oで埋めていく
    cy.get('[data-e2e="btn-0"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-1"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-4"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-2"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-8"]').click().should('have.text', 'X');

    // X勝利時の文言確認
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: X');
  });

  it('Oが勝つテスト', () => {
    // ボードの左上から順にX,Oで埋めていく
    cy.get('[data-e2e="btn-0"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-1"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-2"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-4"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-8"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-7"]').click().should('have.text', 'O');

    // O勝利時の文言確認
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: O');
  });

  it('引き分けのテスト', () => {
    // ボードの左上から順にX,Oで埋めていく
    cy.get('[data-e2e="btn-0"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-1"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-2"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-4"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-7"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-5"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-3"]').click().should('have.text', 'X');
    cy.get('[data-e2e="btn-6"]').click().should('have.text', 'O');
    cy.get('[data-e2e="btn-8"]').click().should('have.text', 'X');

    // 引き分け時の文言確認
    cy.get('[data-e2e="status"]').should('have.text', 'Winner: Draw!');
    // わざとテストを落とす時用のコード
    // cy.get('[data-e2e="status"]').should('have.text', 'Draw!');
  });
});
