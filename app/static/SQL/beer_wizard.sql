CREATE TABLE IF NOT EXISTS user (
    name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    level INT NOT NULL,
    PRIMARY KEY(name)
);

CREATE TABLE IF NOT EXISTS spell (
    name VARCHAR(30) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    level INT NOT NULL,
    PRIMARY KEY(name)
);

TRUNCATE TABLE user;
TRUNCATE TABLE spell;

INSERT INTO `spell` VALUES (
    'Can to the FACE!',
    'Call out someone of a lower level than you and make them take a drink. Abusing this too much is stupid and shitty and will get you shunned by true Beer Wizards.',
    2
);

INSERT INTO `spell` VALUES (
    'Wizard''s duel',
    'Challenge someone to a common drinking activity, for example, shotgunning a beer, chugging a beer or a game of beer pong. Make the activity consume one beer per wizard. The winner uses the can to level up, the loser removes a can from their staff.',
    3
);

INSERT INTO `spell` VALUES (
    'Counterspell',
    'If anyone casts a spell on you, you may instantly, with no hesitation cast Counterspell. To the best of your ability, reverse the effects - if you were told to shotgun, they must shotgun, if you were told to drink, they drink, and so on...',
    4
);

INSERT INTO `spell` VALUES (
    'Beerekinesis',
    'Retrieve a beer through magic. That is, make someone who''s a lower level than you get you a beer. Only works if a beer is needed, for instance for a game, or because you finished the beer on your staff.',
    5
);

INSERT INTO `spell` VALUES (
    'Archmage',
    'When you reach this level, create a rule that all must follow under penalty of drinking from their staff. You may also remove a previously added rule.',
    6
);

INSERT INTO `spell` VALUES (
    'Beer Blast',
    'Fire a beer-powered spell at another Wizard, forcing them to shotgun a beer. This is another rule that cannot be abused. Don''t be a Wizard dick.',
    7
);

INSERT INTO `spell` VALUES (
    'Hat of Shame',
    'Humiliate a pathetic lesser Wizard by forcing them to wear a humorous headpiece for your enjoyment. Only cast this spell on Wizards with half or fewer levels than you (so, 4 or less at 8, 5 or less at 10).',
    8
);

INSERT INTO `spell` VALUES (
    'Wise Wizard',
    'Who gives a fuck what spells you have? Walk around being the most badass fucking Wizard around. No one can cast spells on you, and you can do as you damn well please. If someone else reaches your level of greatness, you must fight for your honor. Use your staves to compete in Wizard Combat. The loser is the one whose staff breaks first. He may keep the longer end of his staff, but the shorter end is lost. The winner is the new Wisest Wizard. The person who remains the Wisest Wizard at the end of the night wins.',
    9
);
