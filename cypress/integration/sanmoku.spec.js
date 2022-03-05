describe('三目並べのテスト', () => {
  it('it successfully loads!', () => {
    cy.visit('/');
    // expect(true).to.equal(true);
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
});
