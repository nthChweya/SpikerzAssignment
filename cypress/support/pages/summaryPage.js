class Summary{
    elements = {
        app_profile_picture: () => cy.get("app-profile-picture[class='ng-star-inserted']"),
        manage_accounts_link: () => cy.get("div[class='flex flex-gap-5 dropdown-menu-item-accounts']"),
        add_account_button: () => cy.get("h5[class='ng-tns-c1636094020-64']")
    }

    //Page Operations

    go_to_summary_page(){
        this.elements.app_profile_picture().click()
        this.elements.manage_accounts_link().click()
    }

    go_to_social_connect_page(){
        this.elements.add_account_button().click()
    }
}
export default new Summary