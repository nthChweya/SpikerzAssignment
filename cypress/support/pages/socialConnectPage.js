class SocialConnect{
    elements ={
        select_youtube: () => cy.get(".platform-icon.platform-youtube"),
        you_tube_button: () => cy.get("button.ant-btn-default")
    }

    connect_youtube(){
        this.elements.select_youtube().click()
        this.elements.you_tube_button().click()
    }
}
export default new SocialConnect