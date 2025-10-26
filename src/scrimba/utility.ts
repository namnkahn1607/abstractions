type User = {
    id: number,
    username: string,
    role: "member" | "contributor" | "admin"
};

type UpdatedUser = Partial<User>;

let nextId = 1;

const users: User[] = [
    { id: nextId++, username: "john_doe", role: "member" },
    { id: nextId++, username: "jane_smith", role: "contributor" },
    { id: nextId++, username: "alice_jones", role: "admin" },
    { id: nextId++, username: "charlie_brown", role: "member" }
];

const updateUser = (id: number, updates: UpdatedUser) => {
    const selectedUser = users.find(user => user.id === id);

    if (selectedUser === undefined) {
        console.error(`Can not find user with id: ${id}`);
        return;
    }

    Object.assign(selectedUser, updates);
};

updateUser(1, { username: "new_john_doe"} );
updateUser(4, { role: "contributor"} );

console.log(users);

type OmitIDUser = Omit<User, "id">;

const addNewUser = (newUser: OmitIDUser): User => {
    const user = {
        id: nextId++,
        ...newUser
    };

    users.push(user);

    return user;
};

addNewUser({ username: "harry_osborn", role: "admin" });
addNewUser({ username: "peter_parker", role: "contributor" });

console.log(users);