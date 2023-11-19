// A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type
type OptionFlag<Type> = {
    [Property in keyof Type]: boolean;
};

type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionFlag<Features>;

/* Mapping Modifiers */
// You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type UnLockedAccount = CreateMutable<LockedAccount>;

type MayBeUser = {
    id: number;
    name?: string;
    age?: number;
};
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type User = Concrete<MayBeUser>;

/* Key Remapping via 'as' */
interface PersonWithLoc {
    name: string;
    age: number;
    location: string;
}

type Getter<Type> = {
    [Property in keyof Type as `get${Capitalize<
        string & Property
    >}`]: () => Type[Property];
};

type LazyPerson = Getter<PersonWithLoc>;

//You can filter out keys by producing never via a conditional type:
interface Circle_1 {
    kind: "circle";
    radius: number;
}
// Remove the 'kind' property
// type RemoveKindField<Type> = {
//     [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
// };

type RemoveKindField<Type> = {
    [Property in keyof Type as Property extends "kind"
        ? never
        : Property]: Type[Property];
};

type KindLessCircle = RemoveKindField<Circle_1>;

// You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };
type EventConfig<Type extends { kind: string }> = {
    [Property in keyof Type as Type["kind"]]: (event: Type) => void;
};
type Config = EventConfig<SquareEvent | CircleEvent>;

/* Further Exploration
Mapped types work well with other features in this type manipulation section, for example here is a mapped type using a conditional type which returns either a true or false depending on whether an object has the property pii set to the literal true:
 */
type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
};
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true }
        ? true
        : false;
};
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
