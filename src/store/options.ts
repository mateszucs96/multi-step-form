export type PlansType = {
	id: number;
	title: string;
	price: number;
};

export type AddonsType = {
	title: string;
	description: string;
	price: number;
}

export const PLANS: PlansType[] = [
	{ id: 1, title: 'Arcade', price: 9 },
	{ id: 2, title: 'Advanced', price: 12 },
	{ id: 3, title: 'Pro', price: 15 },
];

export const ADDONS: AddonsType[] = [
	{ title: 'Online service', description: 'Access to multiplayer games', price: 1 },
	{ title: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2 },
	{ title: 'Customizable profile', description: 'Custom theme on your profile', price: 2 },
];