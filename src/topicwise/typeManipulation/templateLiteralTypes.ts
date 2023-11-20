// Template literal types build on string literal types, and have the ability to expand into many strings via unions

type World = "World";
type Greeting = `Hello, ${World}`;

type EmailLocaleIds = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AlllocaleIds = `${EmailLocaleIds | FooterLocaleIDs}_id`;
type Lang = "en" | "hin" | "pt";
type localeMessageIDs = `${Lang}_${AlllocaleIds}`;

/* String Unions in Types */
const passedObject = {
    firstName: "John",
    lastName: "doe",
    age: 25,
};

type PropEventSource<Type> = {
    on(
        eventName: `${string & keyof Type}Changed`,
        callback: (newvalue: any) => void
    ): void;
};

declare function makeWatchedobject<Type>(
    obj: Type
): Type & PropEventSource<Type>;

const person_2 = makeWatchedobject(passedObject);

person_2.on("firstNameChanged", () => {});

// Prevent easy human error (using the key instead of the event name)
// person_2.on("firstName", () => {});

// It's typo-resistant
// person_2.on("frstNameChanged", () => {});

/* Inference with Template Literals */
type PropEventSource_updated<Type> = {
    on<Key extends string & keyof Type>(
        eventname: `${Key}Changed`,
        callback: (newValue: Type[Key]) => void
    ): void;
};

declare function makeWatchedobject_updated<Type>(
    obj: Type
): Type & PropEventSource_updated<Type>;

const person_3 = makeWatchedobject_updated(passedObject);
person_3.on("firstNameChanged", (newValue) => {
    // here new value is type of string
    console.log(newValue.toUpperCase());
});
person_3.on("ageChanged", (newValue) => {
    // here new value is type of number
    console.log(newValue.toFixed(2));
});

/* Intrinsic String Manipulation Types */
type Admin = "admin";
/*
Uppercase<StringType>
Converts each character in the string to the uppercase version.
*/
type UAdmin = `ROLE_${Uppercase<Admin>}`;
/*
Lowercase<StringType>
Converts each character in the string to the lowercase equivalent.
*/
type LAdmin = `role_${Lowercase<Admin>}`;
/*
Capitalize<StringType>
Converts the first character in the string to an uppercase equivalent.
*/
type CAdmin = `Role_${Capitalize<Admin>}`;
/*
Uncapitalize<StringType>
Converts the first character in the string to a lowercase equivalent.
*/
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
