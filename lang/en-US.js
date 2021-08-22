module.exports = {
    app: {
        header: {
            titleLabel: "Pokédex"
        },
        buttonScrollTop: {
            ariaLabel: "Back to top"
        },
        modalHello: {
            titleLabel: "Welcome!",
            contentLabel: "I hope you enjoy using this web app.",
            closeButtonLabel: "Close",
        },
        errorLabel: "An error occurred, please try again later",
        loadingLabel: "Loading",
        errorPage: {
            content: "Oops, this page doesn't exist!",
            backHomePageLinkLabel: "Back to home"
        }
    },
    base: {
        input: {
            requiredLabel: " (required)"
        },
        loader: {
            ariaLabel: "Loading"
        }
    },
    pokemon: {
        formSearch: {
            searchInputLabel: "Name",
            searchInputPlaceholder: "Name",
            submitButtonLabel: "Search"
        }
    },
    team: {
        buttonAddPokemon: {
            label: "Add to my team"
        },
        formSurname: {
            nameInputLabel: "Surname",
            nameInputPlaceholder: "Surname",
            submitButtonLabel: "Rename"
        },
        modalPokemon: {
            titleLabel: "What to do with <span class='capitalize'>{pokemonName}</span>?",
            removeFromTeamButtonLabel: "Remove from my team",
            closeModalButtonLabel: "Close"
        },
        section: {
            titleLabel: "My team",
            teamEmpty: "No pokemon added to the team yet!",
        }
    },
    pokemonPage: {
        evolutionsSection: {
            titleLabel: "Evolutions"
        }
    },
    indexPage: {
        searchSection: {
            noneFoundLabel: "No pokemon found with this name!",
            seeAllButtonLabel: "See all pokemons"
        }
    },
    store: {
        team: {
            pokemonAddedToTeamSnackbarLabel: "Pokemon added to the team",
            pokemonRemovedFromTeamSnackbarLabel: "Pokemon removed from the team",
        }
    }
}