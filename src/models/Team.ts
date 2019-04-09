import { Entity, PrimaryGeneratedColumn, Column, getConnection } from 'typeorm';

@Entity()
export class Team {

	static get repository() {
		return getConnection().getRepository(Team);
	}

	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	name: string;

	static get(name: string) {
		return this.repository.findOne({
			where: {
				name: name,
			},
		});
	}
	static create(name: string) {
		let team = new Team();
		team.name = name;
		return this.repository.save(team);
	}
	static async getOrCreate(name: string) {
		let team = await Team.get(name);
		if (!team) team = await Team.create(name);
		return team;
	}

	static getLeaderBoard() {
		return this.repository.query(`
			SELECT team.id, name as team, SUM(team_member.clicks) as clicks
			FROM team
			LEFT JOIN team_member ON team_member."teamId" = team.id
			GROUP BY team.id, name
		`);
	}
};
