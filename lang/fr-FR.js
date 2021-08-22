module.exports = {
    app: {
        header: {
            titleLabel: "Pokédex FR"
        },
        buttonScrollTop: {
            ariaLabel: "Retour en haut de la page"
        },
        errorLabel: "Une erreur est survenue",
        loadingLabel: "Chargement en cours",
        errorPage: {
            content: "Oups, cette page n'existe pas !",
            backHomePageLinkLabel: "Retour à la page d'accueil"
        }
    },
    base: {
        input: {
            requiredLabel: " (obligatoire)"
        },
        loader: {
            ariaLabel: "Chargement en cours"
        }
    },
    pokemon: {
        formSearch: {
            searchInputLabel: "Rechercher",
            searchInputPlaceholder: "Rechercher",
            submitButtonLabel: "Chercher"
        }
    },
    team: {
        buttonAddPokemon: {
            label: "Ajouter à mon équipe"
        },
        formSurname: {
            nameInputLabel: "Surnom",
            nameInputPlaceholder: "Surnom",
            submitButtonLabel: "Renommer"
        },
        modalPokemon: {
            titleLabel: "Que faire avec <span class='capitalize'>{pokemonName}</span> ?",
            removeFromTeamButtonLabel: "Enlever de mon équipe",
            closeModalButtonLabel: "Fermer"
        },
        section: {
            titleLabel: "Mon équipe",
            teamEmpty: "Aucun pokémon ajouté à l'équipe pour le moment !",
        }
    },
    pokemonPage: {
        evolutionsSection: {
            titleLabel: "Évolutions"
        }
    },
    indexPage: {
        searchSection: {
            noneFoundLabel: "Aucun pokémon de ce nom trouvé !",
            seeAllButtonLabel: "Voir tous les pokémons"
        }
    },
    store: {
        team: {
            pokemonAddedToTeamSnackbarLabel: "Pokémon ajouté à l'équipe",
            pokemonRemovedFromTeamSnackbarLabel: "Pokémon enlevé l'équipe",
        }
    }
}