// NOTE = "and don't shorten or summarize the text and maintail overall lenght of text."
const NOTE = "and maintain overall length of text"

const TEXT_MODES = {
    'Standard': {
        'TEMPERATURE': 0.5,
        'FREQUENCY_PENALTY': 0,
        'PRESENCE_PENALTY' :0,
        'INITIAL_PROMPT': `Please paraphrase this text, ${NOTE} : `
    },
    'Fluency': {
        'TEMPERATURE': 0.7,
        'FREQUENCY_PENALTY': 0.5,
        'PRESENCE_PENALTY' :0,
        'INITIAL_PROMPT': `Please paraphrase this text to improve fluency, ${NOTE} : `
    },
    'Formal': {
        'TEMPERATURE': 0.6,
        'FREQUENCY_PENALTY': 0.5,
        'PRESENCE_PENALTY' :0.5,
        'INITIAL_PROMPT': `Please paraphrase this text to a more formal style, ${NOTE}: `
    },
    'Simple' :{
        'TEMPERATURE': 0.9,
        'FREQUENCY_PENALTY': 0.3,
        'PRESENCE_PENALTY' :0.3,
        'INITIAL_PROMPT': `Please paraphrase this text in a way that a five year old can understand it, ${NOTE}: `
    },
    'Creative' :{
        'TEMPERATURE': 1.0,
        'FREQUENCY_PENALTY': 0.0,
        'PRESENCE_PENALTY' :0.0,
        'INITIAL_PROMPT': `Please paraphrase this text in a very creative way, ${NOTE}: `
    },
    'Smarter' :{
        'TEMPERATURE': 0.7,
        'FREQUENCY_PENALTY': 0.5,
        'PRESENCE_PENALTY' :0.5,
        'INITIAL_PROMPT': `Please paraphrase this text in a way that makes it sound smarter, ${NOTE}: `
    },
    'Expand' :{
        'TEMPERATURE': 0.5,
        'FREQUENCY_PENALTY': 0.0,
        'PRESENCE_PENALTY' :0.0,
        'INITIAL_PROMPT': `Please paraphrase this text in such a way that the more detail and depth get added into the text about the topic to increase the sentence lenght, the length of the text should be increase by minimum of 200 percent, ${NOTE}: `
    }
}

export default TEXT_MODES;

//  and number of words should not be less than number of words in input text :