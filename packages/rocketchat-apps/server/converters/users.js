import { UserStatusConnection, UserType } from '@rocket.chat/apps-ts-definition/users';

export class AppUsersConverter {
	constructor(orch) {
		this.orch = orch;
	}

	convertById(userId) {
		const user = RocketChat.models.Users.findOneById(userId);

		return this._convertToApp(user);
	}

	convertByUsername(username) {
		const user = RocketChat.models.Users.findOneByUsername(username);

		return this._convertToApp(user);
	}

	_convertToApp(user) {
		if (!user) {
			return undefined;
		}

		const type = this._convertUserTypeToEnum(user.type);
		const status = this._convertStatusConnectionToEnum(user.status);
		const statusConnection = this._convertStatusConnectionToEnum(user.statusConnection);

		return {
			id: user._id,
			username: user.username,
			emails: user.emails,
			type,
			isEnabled: user.active,
			name: user.name,
			roles: user.roles,
			status,
			statusConnection,
			utcOffset: user.utcOffset,
			createdAt: user.createdAt,
			updatedAt: user._updatedAt,
			lastLoginAt: user.lastLogin
		};
	}

	_convertUserTypeToEnum(type) {
		switch (type) {
			case 'user':
				return UserType.USER;
			case 'bot':
				return UserType.BOT;
			default:
				throw new Error('Unknown user type of:', type);
		}
	}

	_convertStatusConnectionToEnum(status) {
		switch (status) {
			case 'offline':
				return UserStatusConnection.OFFLINE;
			case 'online':
				return UserStatusConnection.ONLINE;
			case 'away':
				return UserStatusConnection.AWAY;
			case 'busy':
				return UserStatusConnection.BUSY;
			default:
				throw new Error('Unknown status type of:', status);
		}
	}
}
