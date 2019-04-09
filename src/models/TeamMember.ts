import { Entity, PrimaryGeneratedColumn, Column, getConnection } from 'typeorm';

@Entity()
export class TeamMember {

	static get repository() {
		return getConnection().getRepository(TeamMember);
	}

	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	teamId: number;
	@Column()
	sessionId: string;
	@Column({ default: 0 })
	clicks: number;

	static get(sessionId: string, teamId: number) {
		return this.repository.findOne({
			where: {
				sessionId,
				teamId,
			},
		});
	}
	static create(sessionId: string, teamId: number) {
		let member = new TeamMember();
		member.sessionId = sessionId;
		member.teamId = teamId;
		return this.repository.save(member);
	}
	static async getOrCreate(sessionId: string, teamId: number) {
		let team = await TeamMember.get(sessionId, teamId);
		if (!team) team = await TeamMember.create(sessionId, teamId);
		return team;
	}

	static update(member: TeamMember) {
		return this.repository.save(member);
	}

	static teamClicks(teamId: number) {
		return this.repository.createQueryBuilder().select('SUM(clicks)').where('"teamId" = ' + teamId).execute();
	}
};
