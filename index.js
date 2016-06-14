/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [{
		"Which two nations have won the tournament more times in the century than any others?": [
			"Argentina and Uruguay",
			"Colombia and Chile",
			"Brazil and Argentina",
			"Mexico and Paraguay"
		]
	}, {
		"In what year was the first Copa America held?": [
			"1917",
			"1912",
			"1920",
			"1926"
		]
	}, {
		"Which was the first non South American nation to reach the final?": [
			"Mexico",
			"USA",
			"Canada",
			"Panama"
		]
	}, {
		"Where was the two thousand four cup held?": [
			"Peru",
			"Mexico",
			"Brazil",
			"Chile"
		]
	}, {
		"When did Colombia win its first Copa America?": [
			"Two thousand one",
			"Nineteen ninety nine",
			"Two thousand seven",
			"Nineteen eighty seven"
		]
	}, {
		"Which Brazilian player was the two thousand four goalie?": [
			"Adriano",
			"Kaka",
			"Nilson",
			"Gomes"
		]
	}, {
		"Which country has never lost a cup held in its territory in the twentieth century?": [
			"Uruguay.",
			"Argentina.",
			"Brazil.",
			"Colombia."
		]
	}, {
		"How many times has Argentina hosted the Cup?": [
			"9 times",
			"5 times",
			"12 times",
			"3 times"
		]
	}, {
		"Who won the Cup in Nineteen seventy five?": [
			"Peru",
			"Chile",
			"Bolivia",
			"Colombia"
		]
	}, {
		"How many times has Argentina won the Cup?": [
			"14 times",
			"15 times",
			"8 times",
			"12 times"
		]
	}, {
		"Who is the host of Copa America in 2016?": [
			"USA",
			"Mexico",
			"Chile",
			"Ecuador"
		]
	}, {
		"Which country reached the final without winning a game in 2011?": [
			"Paraguay",
			"Costa Rica",
			"Bolivia",
			"Ecuador"
		]
	}, {
		"Did Maradonna or Pele ever win Copa America?": [
			"Neither",
			"Both",
			"Only Maradonna",
			"Only Pele"
		]
	}, {
		"In what year did Jamaica play in the tournament?": [
			"Two thousand fifteen",
			"Nineteen ninety nine",
			"Two thousand twelve",
			"Nineteen ninety two"
		]
	}, {
		"Of these four, which is the only country to have won the Cup?": [
			"Bolivia",
			"Venezuela",
			"Ecuador",
			"USA"
		]
	}, {
		"Who won the tournament fifteen times, the most in history?": [
			"Uruguay",
			"Brazil",
			"Argentina",
			"Peru"
		]
	}, {
		"Who hosted Copa America in Nineteen ninety nine?": [
			"Paraguay",
			"Bolivia",
			"Colombia",
			"Chile"
		]
	}, {
		"Who won the cup in Nineteen seventeen?": [
			"Uruguay",
			"Bolivia",
			"Brazil",
			"Argentina"
		]
	}, {
		"Who was runner up in two thousand one?": [
			"Mexico",
			"Colombia",
			"Costa Rica",
			"Chile"
		]
	}, {
		"Who beat USA in their first match of 2016?": [
			"Colombia",
			"Peru",
			"Venezuela",
			"Chile"
		]
	}, {
		"Which country did not beat Venezuela in their first match of 2016?": [
			"Jamaica",
			"Brazil",
			"Peru",
			"USA"
		]
	}, {
		"Which country beat Uruguay 3, 0, in their first match of 2016?": [
			"Mexico",
			"Peru",
			"Colombia",
			"USA"
		]
	}, {
		"Which country beat Chile in week one of 2016?": [
			"Argentina",
			"Brazil",
			"Venezuela",
			"Peru"
		]
	}, {
		"Which country did not beat Venezuela in week 2 of 2016?": [
			"Uruguay",
			"Chile",
			"Peru",
			"Argentina"
		]
	}, {
		"Which country beat Haiti in week 2 of 2016?": [
			"Brazil",
			"USA",
			"Chile",
			"Peru"
	
		]
	}, {
		"Which country did not beat Peru in week 2 of 2016?": [
			"Ecuador",
			"Chile",
			"Uruguay",
			"Paraguay"
		]
	}, {
		"Which country beat Ecuador in week 1 of 2015?": [
			"Chile",
			"Mexico",
			"Peru",
			"Venezuela"
		]
	}, {
		"Which country did not beat Bolivia in week 1 of 2015?": [
			"Mexico",
			"Peru",
			"Brazil",
			"Argentina"
		]
	}, {
		"For which country is Robert Lewandowski playing in 2016?": [
			"Poland, but not in Copa America",
			"USA, but only as a substitute",
			"Chile",
			"Colombia"
		]
	}, {
		"How old was Lionel Messi at week 2 in 2016?": [
			"28 years old",
			"30 years old",
			"33 years old",
			"25 years old"
		]
	}, {
		"How tall is Lionel Messi?": [
			"5 feet 7 inches",
			"5 feet 9 inches",
			"5 feet 3 inches",
			"5 feet 11 inches"
		]
	}, {
		"Which player was diagnosed with growth hormone deficiency as a child?": [
			"Messi",
			"Kaka",
			"Neymar",
			"Sergio Aguero"
		]
	}, {
		"How tall is Luis Suarez?": [
			"6 feet",
			"5 feet 8 inches",
			"5 feet 7 inches",
			"5 feet 9 inches",
			"5 feet 11 inches"
		]
	}, {
		"How many goals did Paulo Guerrero score in 2015 for Peru?": [
			"4 goals",
			"5 goals",
			"7 goals",
			"2 goals"
		]
	}, {
		"How many goals did Eduardo Vargas score in 2015 for Chile?": [
			"4 goals",
			"5 goals",
			"7 goals",
			"2 goals"
		]
	}, {
		"How many goals did Lucas Barrios score in 2015 for Paraguay?": [
			"3 goals",
			"5 goals",
			"1 goal",
			"2 goals"
		]
	}, {
		"How many goals did Arturo Vidal score in 2015 for Chile?": [
			"3 goals",
			"5 goals",
			"1 goal",
			"2 goals"
		]
	}, {
		"How many goals did Sergio Aguero score in 2015 for Argentina?": [
			"3 goals",
			"5 goals",
			"1 goal",
			"2 goals"
		]
	}, {
		"How many goals did Raul Jimenez score in 2015 for Mexico?": [
			"2 goals",
			"5 goals",
			"1 goal",
			"3 goals"
		]
	}, {
		"How many goals did Miller Bolanos score in 2015 for Ecuador?": [
			"2 goals",
			"5 goals",
			"1 goal",
			"3 goals"
		]
	}, {
		"How many goals did Vicente Vuoso score in 2015 for Mexico?": [
			"2 goals",
			"5 goals",
			"1 goal",
			"3 goals"
		]
	}, {
		"How many goals did Angel Di Maria score in 2015 for Argentina?": [
			"2 goals",
			"5 goals",
			"4 goals",
			"3 goals"
		]
	}, {
		"How many goals did Charles Aranguiz score in 2015 for Chile?": [
			"2 goals",
			"5 goals",
			"4 goals",
			"3 goals"
		]
	}, {
		"How many goals did Gonzalo Higuain score in 2015 for Argentina?": [
			"2 goals",
			"5 goals",
			"4 goals",
			"3 goals"
		]
	}, {
		"How many goals did Marcelo Moreno score in 2015 for Bolivia?": [
			"2 goals",
			"5 goals",
			"4 goals",
			"3 goals"
		]
	}, {
		"Did Andre Carrillo score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Edgar Benitez score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Javier Pastore score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Jose Maria Gimenez score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Derlis Gonzalez score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Marcos Rojo score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Ronald Raldes score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Salomon Rondon score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Nicolas Fedor score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Juan Carlos Valenzuela score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Thiago Silva score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Martin Smedberg Dalence score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Jeison Murillo score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Claudio Pizarro score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Neymar score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Robinho score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Alexis Sanchez score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Nelson Haedo Valdez score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Roberto Firmino score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Lionel Messi score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Douglas Costa score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Enner Valencia score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Mauricio Isla score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Cristian Rodriguez score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Christian Cuevas score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Did Gary Medel score any goals in 2015?": [
			"Yes",
			"None",
			"Injured",
			"Did not play that year"
		]
	}, {
		"Who was the youngest goal scorer in 2015?": [
			"Jose Maria Gimenez",
			"Derlis Gonzalez",
			"Jeison Murillo",
			"Neymar"
		]
	}, {
		"Which player had the most assists in 2015?": [
			"Jorge Valdivia",
			"Lionel Messi",
			"Adrian Aldrete",
			"Dani Alves"
		]
	}, {
		"Which player was the top goal scorer in 2011?": [
			"Paulo Guerrero for Peru",
			"Luis Suarez for Uruguay",
			"Sergio Aguero for Argentina",
			"Alexandre Pato for Brazil"
		]
	}, {
		"Which player was the top goal scorer in 2007?": [
			"Robinho for Brazil",
			"Juan Roman Riquelme for Argentina",
			"Nery Castillo for Mexico",
			"Herman Crespo for Argentina"
		]
	}, {
		"Which player was the top goal scorer in 2004?": [
			"Adriano for Brazil",
			"Carlos Bueno for Uruguay",
			"Javier Saviola for Argentina",
			"Kily Gonzalez for Argentina"
		]
	}, {
		"Which player was the top goal scorer in 2001?": [
			"Victor Artistizabal for Colombia",
			"Pablo Cesar Wanchope for Costa Rica",
			"Cristian Montecinos for Chile",
			"Amado Guevara for Honduras"
		]
	}, {
		"Which player was the top goal scorer in 1999?": [
			"Ronaldo for Brazil",
			"Rivaldo for Brazil",
			"Amoroso for Brazil",
			"Martin Palermo for Argentina"
		]
	}, {
		"Which player was the top goal scorer in 1997?": [
			"Luis Hernandez for Mexico",
			"Ronaldo for Brazil",
			"Marcelo Gallardo for Argentina",
			"Erwin Sanchez for Bolivia"
		]
	}, {
		"Which player was the top goal scorer in 1993?": [
			"Jose Luis Dolgetta for Venezuela",
			"Gabriel Batistuta for Argentina",
			"Palhinha for Brazil",
			"Ney Aviles for Ecuador"
		]
	}, {
		"Which countries made it to the final in 1993?": [
			"Argentina and Mexico",
			"Ecuador and Colombia",
			"Mexico and Peru",
			"Brazil and Argentina"
		]
	}, {
		"Which countries made it to the final in 1995?": [
			"Uruguay and Brazil",
			"USA and Colombia",
			"Brazil and Peru",
			"Brazil and Mexico"
		]
	}, {
		"Which countries made it to the final in 1997?": [
			"Bolivia and Brazil",
			"Paraguay and Colombia",
			"Brazil and Peru",
			"Peru and Mexico"
		]
	}, {
		"Which countries made it to the final in 1999?": [
			"Uruguay and Brazil",
			"Chile and Mexico",
			"Brazil and Peru",
			"Peru and Argentina"
		]
	}, {
		"Which countries made it to the final in 2001?": [
			"Colombia and Mexico",
			"Uruguay and Honduras",
			"Peru and USA",
			"Colombia and Argentina"
		]
	}, {
		"Which countries made it to the final in 2004?": [
			"Argentina and Brazil",
			"Uruguay and Colombia",
			"Peru and Brazil",
			"Colombia and Argentina"
		]
	}, {
		"Which countries made it to the final in 2007?": [
			"Argentina and Brazil",
			"Uruguay and Mexico",
			"Peru and Brazil",
			"Colombia and USA"
		]
	}, {
		"Which countries made it to the final in 2011?": [
			"Uruguay and Paraguay",
			"Peru and Mexico",
			"Venezuela and Brazil",
			"Colombia and Chile"
		]
	}, {
		"Which countries made it to the final in 2015?": [
			"Chile and Argentina",
			"Peru and Paraguay",
			"Venezuela and Brazil",
			"Peru and Chile"
		]
	}, {
		"Who was named Most Valuable Player in 2011?": [
			"Luis Suarez",
			"Paolo Guerrero",
			"Justo Villar",
			"Andre Carrillo"
		]
	}, {
		"Who was named Most Valuable Player in 2007?": [
			"Robinho",
			"Lionel Messi",
			"Nery Castillo",
			"Hernan Crespo"
		]
	}, {
		"Which country hosted the tournament in 1995?": [
			"Uruguay",
			"Colombia",
			"Argentina",
			"Chile"
		]
	}, {
		"Which country hosted the tournament in 2001?": [
			"Colombia",
			"Bolivia",
			"Argentina",
			"Brazil"
		]
	}, {
		"Which country hosted the tournament in 1993?": [
			"Ecuador",
			"Costa Rica",
			"Nicaragua",
			"Brazil"
		]
	}, {
		"Which country hosted the tournament in 1997?": [
			"Bolivia",
			"Costa Rica",
			"Nicaragua",
			"Brazil"
		]
	}, {
		"Which country hosted the tournament in 1991?": [
			"Chile",
			"Costa Rica",
			"Nicaragua",
			"Brazil"
		]
	}, {
		"Which country hosted the tournament in 1989?": [
			"Brazil",
			"Costa Rica",
			"Nicaragua",
			"Chile"
		]
	}, {
		"Which country hosted the tournament in 1987?": [
			"Argentina",
			"Costa Rica",
			"Nicaragua",
			"Chile"
		]
	}, {
		"Which country hosted the tournament in 1941?": [
			"Chile",
			"Costa Rica",
			"Bolivia",
			"Argentina"
		]
	}, {
		"Which country hosted the tournament in 1942?": [
			"Uruguay",
			"Costa Rica",
			"Nicaragua",
			"Brazil"
		]
	}
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". ";
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. ";
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing Copa America Trivia!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". ";
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}