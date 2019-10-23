## Database schema ontwerp

### Collection Games

- **game_room_naam** -> string (unique)
- **game_status** -> string
- **teams** -> object
	- **team_naam** -> string (unique)
	- **team_score** -> int
- **rondes** -> object
	- **ronde_id** -> int
	- **ronde_status** -> string
	- **ronde_categorie** -> array
		- **categorie_naam** -> string
	- **vragen** -> object
		- **vraag** -> string (unique)
		- **antwoord** -> string
		- **categorie_naam** -> string
		- **team_antwoorden** object
			- **team_naam**
			- **gegeven_antwoord**
			- **correct** -> boolean

### Collection Questions

- **question** -> string
- **answer** -> string
- **category** -> string
