//COMANDOS PARA LA TERMINAL

const commands = {
    'help': {
        description: 'type `commands` to list available commands.\n',

    },
    'clear': {
        description: `clears the terminal screen.\n`,
        fn: () => {
            return '';
        }
    },
    'linkedin': {
        description: `opens linkedin profile.\n`,
        fn: () => {
            window.open('https://www.linkedin.com/in/lionel-arce/', '_blank', 'noopener,noreferrer');
            return '';
        }
    },
    'github': {
        description: `opens github profile.\n`,
        fn: () => {
            window.open('https://github.com/lioarce01', '_blank', 'noopener,noreferrer');
            return '';
        }
    },
    'whois': {
        description: `who I am?\n`,
        fn: () => {
            window.open('https://lionelarce-portfolio.vercel.app', '_blank', 'noopener,noreferrer');
            return '';
        }
    },
    'commands': {
        description: `lists available commands.\n`,
        fn: () => {
            // return all available commands with descriptions
            return Object.keys(commands).map(command => {
                return `> ${command} - ${commands[command].description}`;
            }).join(''); // join all commands into a single string

        }
    },
}

export default commands;