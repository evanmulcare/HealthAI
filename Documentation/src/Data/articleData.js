export const articleData = {
  welcome: {
    "getting-started": {
      fileHeader: {
        title: "Getting Started",
      },
      fileVideo: {
        title: "Getting Started",
        videoURL:
          "https://www.youtube.com/embed/PsxyyBcrmdg?si=6mMjWZxIDV05oqBP",
      },
      fileArticle: {
        text: 'Welcome to HealthAI Docs, Here you will find a showcase of the features developed through collaborative efforts in our group project module. Our Team members were: Luke Kiely, Finn Hoogerwerf, Xingchen Yang, and Evan Mulcare. Together, we developed a full system to tackle the following project brief…\
"The recent surge in the cost of living, particularly in the healthcare sector, has created an impetus to drive down costs\
through the use of standard AI-trained models and more specifically generative AI in the form of Large Language Models\
(LLMs).\
Furthermore, a societal transformation is taking place whereby healthcare professionals, and patients alike, are shifting\
from reactive to predictive HealthAI care management. Rather than waiting for health problems to be manifested as life-\
threatening conditions, AI technology enables the prediction of future health problems using datasets of patient\
information.\
This transformation in healthcare management has created an opportunity for your software development company to\
develop applications for this lucrative medical sector. The objective of your start-up is to develop a bespoke system which\
predicts the likelihood of someone contracting the serious medical conditions of heart disease, lung cancer and colon\
cancer. As a method of fundraising your start-up, the team will charge subscribers a monthly fee. Payments will be made\
using a payment processor such as PayPal Sandbox or Stripe."',
      },
      fileInstructions: {
        title: "Main Project Components",
        listElements: [
          "An android app, HealthAI-App, enables patients and doctors, to calculate the risk of illness based on lifestyle and " +
            "prior medical history",
          "A portal website, HealthAI-Web, for medical professionals.",
          "Machine learning models, based on internationally available medical datasets, will be developed to implement " +
            "the backend AI (HealthAI-Predict).",
          "Integration of LLM technology, HealthAI-LLM",
        ],
      },
    },
  },
  "healthai-web": {
    registration: {
      fileHeader: {
        title: "Registration",
      },
      fileVideo: {
        title: "HealthAI-Web Registration",
        videoURL:
          "https://www.youtube.com/embed/i0H0txYpCZs?si=U14eXRdGIZPXyWHC",
      },
      fileArticle: {
        text: "For Registration on the web application Firebase authentication was used, we chose firebases authentication as it saved us from having to write our own authentication logic, this was important due to the small timeline we had for the project.Firebase was also picked because of the many other functionalities it provides, such as firestore and cloud storage which we took advantage of in other areas of the project",
      },
      fileInstructions: {
        title: "Important notes on Registration",
        listElements: [
          "Only Medical professionals may register from the web. Patients must register from the mobile application",
          "Email/Password combination is trhe only authentication method we have implemented.",
        ],
      },
    },
    "access-restrictions": {
      fileHeader: {
        title: "Access Restrictions",
      },
      fileVideo: {
        title: "HealthAI-Web Access Restrictions",
        videoURL:
          "https://www.youtube.com/embed/Hgd9WjO-hLY?si=QR_qfS_GYF0fbr-d",
      },
      fileArticle: {
        text: "Access restrictions are in place so that any medical professional that logs into the system can only see the details of their own patients.",
      },
      fileInstructions: {
        title: "Access Restrictions Notes",
        listElements: [
          "Patients cannot log into the website, they will get an error that tells them to try from the mobile app.",
          "Doctors can only see resources relation to their patients",
        ],
      },
    },

    "healthai-predict-interface": {
      fileHeader: {
        title: "HealthAI-Predict Interface",
      },
      fileVideo: {
        title: "HealthAI-Predict Interface on the Web",
        videoURL:
          "https://www.youtube.com/embed/PsxyyBcrmdg?si=6mMjWZxIDV05oqBP",
      },
      fileArticle: {
        text: "The Web application calls the HealthAI-Predict API (https://healthaibackendtester.onrender.com) to assess patients risk of Heart disease, Lung cancer and Diabetes. Diabetes was used in place of colon cancer as there were no avaliable datasets to map a patients lifestyle to risk factors associated with colon cancer. Each of the Models return a boolean value as to wheter or not the patient is at risk of a disease. The prediction result and form data is then saved to firebase. The HealthAI-Predict Interface also provides endpoints to download the datasets used and accuracy reports of each model.",
      },
      fileInstructions: {
        title: "HealthAI-Predict Interface uses in the web application",
        listElements: [
          "Predicting patients risk for Heart Disease, Lung cancer or Diabetes",
          "Downloading The Datasets used for prediction",
          "Downloading an accuracy report for each model used.",
          "Extended existing datasets with doctor chosen patient information.",
        ],
      },
    },

    "user-profiling": {
      fileHeader: {
        title: "User Profiling",
      },
      fileVideo: {
        title: "HealthAI-Web User Profiling",
        videoURL:
          "https://www.youtube.com/embed/TpH8ORo2PxI?si=DGRULpgREz7nGOWZ",
      },
      fileArticle: {
        text: "User profiling enables medical professionals to run reports establishing levels of risk for all categories for a patient. Each patient has there own profile, where risk assessments can be ran, past medical history can be viewed. The MEdical professional can also store documents related to a patient and chat to them from within their profile",
      },
      fileInstructions: {
        title: "User Profiling Features",
        listElements: [
          "Run reports establishing levels of risk for all categories",
          "View past Medical History for a patient",
          "Store files relating to a patient",
          "Instant message a patient",
        ],
      },
    },

    "aggregation-of-patient-data": {
      fileHeader: {
        title: "Aggregation of Patient Data",
      },
      fileVideo: {
        title: "HealthAI-Web Aggregation of Patient Data",
        videoURL:
          "https://www.youtube.com/embed/iVkEU65TgWc?si=udzrWnZPPfxMrrtC",
      },
      fileArticle: {
        text: "Using new patient information, the medical professional has the option to create and export new datasets by extending those used by HealthAI-Predict.",
      },
      fileInstructions: {
        title: "Steps in Aggregation of Patient Data",
        listElements: [
          "Medical professional picks which dataset they would like to extend",
          "A request is send to download the requested dataset",
          " the Medical professional defines which users data they would like to aggregate",
          "A query is send to firebase to download all the user medical history reports that match the defined users and match the dataqset type i.e lung cancer.",
          "For each medical history document gotten from firebase, a row is added to the dataset excel file.",
          "Once all new rows are added and the data has been aggregated, the new extended dataset is downlaoded to the medical professionals device.",
        ],
      },
    },
  },

  "healthai-predict": {
    api: {
      fileHeader: {
        title: "HealthAI-Predict API",
      },
      fileVideo: {
        title: "HealthAI-Predict API",
        videoURL:
          "https://www.youtube.com/embed/PsxyyBcrmdg?si=6mMjWZxIDV05oqBP",
      },
      fileArticle: {
        text: "HealthAI-Predict is a simple API linking the HealthaAI-Predict backend with the HealthAI-App and HealthAI-web application. It was developed with python using flask and is deployed as a webb service on render (https://healthaibackendtester.onrender.com). Endpoints are called from both the web and app and resources are sent back.",
      },
      fileInstructions: {
        title: "HealthAI-Predict API Key features",
        listElements: [
          "Endpoints provide access to resources",
          "Patient data can be sent and analyzed through machine learning models",
          "Datasets and accuracy reports can be sent to callers of the API",
        ],
      },
    },
    datasets: {
      fileHeader: {
        title: "HealthAI-Predict Datasets",
      },
      fileVideo: {
        title: "HealthAI-Predict Datasets",
        videoURL:
          "https://www.youtube.com/embed/gMniwaQ8wY4?si=9cK53U6xPoGZluIJ",
      },
      fileArticle: {
        text: "The Datasets used by HealthAI-Predict are all publicly available and sourced though www.kaggle.com. These datasets all provide a boolean reuslt value as to wwheather a patient is at risk of the given disease based on various health and lifestyle factors. The dtastets included are for: Heart Disease, Lung Cancer and Diabetes.(Diabetes was chosen as an alternative to colon cancer in the original brief as no public available datasets coould be found on the topic).",
      },
      fileInstructions: {
        title: "HealthAI-Predict Datasets Links",
        listElements: [
          "Heart Disease - https://www.kaggle.com/datasets/rishidamarla/heart-disease-prediction/data",
          "Lung Cancer - https://www.kaggle.com/code/aindreechatterjee/lung-cancer-detection",
          "Diabetes - https://www.kaggle.com/datasets/akshaydattatraykhare/diabetes-dataset",
        ],
      },
    },
    "accuracy-reports": {
      fileHeader: {
        title: "Accuracy Reports",
      },
      fileVideo: {
        title: "HealthAI-Predict Accuracy Reports",
        videoURL:
          "hhttps://www.youtube.com/embed/kseHW_CMJxE?si=D2wtQPACQ6nnHWs2",
      },
      fileArticle: {
        text: "Accuracy reports are available for each model they are simple text files which show to what percentage a given model is accurate.",
      },
      fileInstructions: {
        title: "Accuracy Reports Explained",
        listElements: [
          "From the website an endpoint to PredictAI is called i.e: /download-lung-data-accuracy-txt as a GET request",
          "HealthAI  Predict gets this request then sends back the accurancy report text file as an attachment",
          "The accuracy report is then downlaoded to the users device",
        ],
      },
    },
  },

  "healthai-llm": {
    "open-ai-integration": {
      fileHeader: {
        title: "Open AI Integration",
      },
      fileVideo: {
        title: "Health-AI LLM Open AI Integration",
        videoURL:
          "https://www.youtube.com/embed/mOhXG8fFoEM?si=AeiTz6WuZQnfLUxt",
      },
      fileArticle: {
        text: "API integration of Open AI's ChatGPT has been leveraged in both the Mobile and Web application. This integration has allowed us to incorporate appropriate medical advice with proper disclaimers and general system help and navigation of the web app. Few-shot learning techniques have also been implemented to reduce hallucinations and improve the quality of the LLM responses. Machine translation has also been implemented seperatly in the web app, currently avaliable languages include: English ,French and Spanish",
      },
      fileInstructions: {
        title: "Open AI Integration Key Elements",
        listElements: [
          "Doc-bot: a chatbot which gives appropriate advice to the user by the LLM (with all the necessary qualifications and disclaimers)",
          "Few-shot learning of the LLM to reduce hallucinations and improve the quality of the LLM responses",
          "Incorporation of machine translation technology to create a multilingual application",
          "System help and navigation also provided by the chatbot",
        ],
      },
    },

    "machine-translation": {
      fileHeader: {
        title: "Machine Translation",
      },
      fileVideo: {
        title: "Health-AI LLM Machine Translation",
        videoURL:
          "https://www.youtube.com/embed/NAn_YJMxWhU?si=eDN3w2MyiyT0xmL5",
      },
      fileArticle: {
        text: "Machine Translation has been added to the web app using the react-i18next internationalization framework. This has allowed us to easily implement localization into the application, as we can extend the used languages by adding a new translation JSON file into the project easily.",
      },
      fileInstructions: {
        title: "Machine Translation Explanation",
        listElements: [
          "Translation files are provided in JSON format for each language.",
          "The key remains the same in each translation JSON file, but the value changes according to the specified language.",
          "The i18n library is wrapped around all other components in the App.js file, allowing the library to be accessed in all components.",
          "Each component uses the key values from the JSON files for any text that is present.",
          "When the language state is updated, the values for that language from the JSON file are added to any text elements in all components.",
        ],
      },
    },

    "doc-bot": {
      fileHeader: {
        title: "Doc-Bot",
      },
      fileVideo: {
        title: "Doc-Bot, Chat-GPT powered chatbot",
        videoURL:
          "https://www.youtube.com/embed/Fdi8L7Wt_uk?si=lyeAsbULb03_pn7z",
      },
      fileArticle: {
        text: 'Docbot is a chatbot that uses the OpenAI API to take questions and provide a response. each question that is sent is sent in the context that the chatbot must "Speak like you are a medical professional giving assistance to a doctor. (Provide appropriate disclaimers about advice)".System help can also be provided by doc-bot as an array of answers related to system navigation are passed into the API when sent. Few shot learning is also incorporated to reduce hallucinations',
      },
      fileInstructions: {
        title: "Doc-Bot Main Features",
        listElements: [
          "General medical related questions.",
          "Website help and navigation",
          "Few shot learnings to reduce hallucinations",
        ],
      },
    },

    "system-help": {
      fileHeader: {
        title: "System Help",
      },
      fileVideo: {
        title: "HealthAI-LLM System Help",
        videoURL:
          "https://www.youtube.com/embed/OUMYoJuEcwQ?si=rXmROqFO6Q7jBTlR",
      },
      fileArticle: {
        text: "System help is provided through the chatbot by passing an array related system navigation question to the OpenAI API when a question is asked, this way when a question is asked relating to any page in the website, the chatbot has a general structure on how to answer the questions.",
      },
      fileInstructions: {
        title: "System Help Sample answers example",
        listElements: [
          "You can run risk assessments for diabetes, lung cancer, and heart disease for a particular patient by navigating to the patients page, selecting your desired patient, and running an assessment under the risks tab.",
          "The dashboard page lets you download the Prediction datsets used by our machine learning model for medical risk assesments, you may also download the accuracy report for each model we use from here!",
          "The goal of this website is to help medical professionals run risk assesments for their patients and manage / communicate with their patients. we also provide a mobile app for patients of doctors.",
        ],
      },
    },

    "few-shot-learning": {
      fileHeader: {
        title: "Few Shot Learning",
      },
      fileVideo: {
        title: "Few Shot Learning",
        videoURL:
          "https://www.youtube.com/embed/Fdi8L7Wt_uk?si=lyeAsbULb03_pn7z",
      },
      fileArticle: {
        text: "Few shot learning is incorporated to reduce hallucinations in the chatbot, this is achieved by giving the model sample answers on ways to answer certain questions this means it has some data to structure thier answers on, effectively training the model on the type of answers you want to achieved. To do this in our system we pass some sample answers into the OpenAI API when we send a question.",
      },
      fileInstructions: {
        title: "Few Shot Learning Example Sample answers we use",
        listElements: [
          "I am an AI model and not a certified health professional, but general risk factors for cancer include aging, personal or family history of cancer, tobacco use, excessive weight (obesity), alcohol use, and exposure to radiation.",
          "I am an AI model and not a certified health professional, but general common symptoms of diabetes include increased thirst, frequent urination, unexplained weight loss, fatigue, blurred vision, and slow wound healing.",
        ],
      },
    },
  },
  "healthai-app": {
    "register-login": {
      fileHeader: {
        title: "Register/Login",
      },
      fileVideo: {
        title: "Register/Login Video",
        videoURL:
          "https://www.youtube.com/embed/wiFpDu346lU?si=Ut-lFbHxp4oqhClZ",
      },
      fileArticle: {
        text: "Patients can login and register through the HealthAI mobile App. we chose to develop the application in Androoid studio so it is only available on android devices. We usede Firebase authentication for login and registration due to its ease of use and the other functionalities that Firebase provides. The only login option we provide is through Email/Password.",
      },
      fileInstructions: {
        title: "Register/Login Key Elements",
        listElements: [
          "Firebase Authentication used.",
          "Patients are able to log into the mobile app and access the full features, Medical professionals have limited access.",
        ],
      },
    },

    "patients-gp": {
      fileHeader: {
        title: "Patients' GP",
      },
      fileVideo: {
        title: "Patients' GP Video",
        videoURL:
          "https://www.youtube.com/embed/h76umHxYLmw?si=1WNAVf47kuOb-gYE",
      },
      fileArticle: {
        text: "The Details of a pateints GP is accessable through the mobile app, the patients GP is specified when registering. Once signed in they have options to contact their doctor through call, instant message and scheduling an appointment. All the doctors details are also provided to the patient",
      },
      fileInstructions: {
        title: "Patients' GP Information",
        listElements: [
          "All GP information avaiable to patient.",
          "GP specified at registration",
          "Once signed in patient has options to call, instant message and schedule appointments with their GP.",
        ],
      },
    },

    "insurance-company": {
      fileHeader: {
        title: "Insurance Company",
      },
      fileVideo: {
        title: "Patients Insurance Company Information",
        videoURL:
          "https://www.youtube.com/embed/kUCmGKcVMlk?si=eZNlJx8e2C1j3G3-",
      },
      fileArticle: {
        text: "The patients insurance company is specified on registration and is viewable to the pateint for contact once signed in.",
      },
      fileInstructions: {
        title: "Insurance Company Details",
        listElements: [
          "Specified on registration.",
          "Contact through call and form",
        ],
      },
    },

    "request-professional": {
      fileHeader: {
        title: "Request Professional",
      },
      fileVideo: {
        title: "Requesting a Medical Professional",
        videoURL:
          "https://www.youtube.com/embed/h76umHxYLmw?si=1WNAVf47kuOb-gYE",
      },
      fileArticle: {
        text: "The Details of a pateints GP is accessable through the mobile app, the patients GP is specified when registering. Once signed in they have options to contact their doctor through call, instant message and scheduling an appointment. All the doctors details are also provided to the patient",
      },
      fileInstructions: {
        title: "Request Professional Features",
        listElements: [
          "All GP information avaiable to patient.",
          "GP specified at registration",
          "Once signed in patient has options to call, instant message and schedule appointments with their GP.",
        ],
      },
    },

    support: {
      fileHeader: {
        title: "Support",
      },
      fileVideo: {
        title: "Support Page showcase",
        videoURL:
          "https://www.youtube.com/embed/kUCmGKcVMlk?si=eZNlJx8e2C1j3G3-",
      },
      fileArticle: {
        text: "The support page of the mobile app is where users have options to contact their medical professional and insurance company it displays thier information and contact methods.",
      },
      fileInstructions: {
        title: "Support Page Features",
        listElements: [
          "Shows GP information and contact methods.",
          "Shows Insurance company information and contact methods.",
        ],
      },
    },

    "healthai-predict-interface": {
      fileHeader: {
        title: "HealthAI-Predict Interface",
      },
      fileVideo: {
        title: "HealthAI-Predict Interface Video",
        videoURL:
          "https://www.youtube.com/embed/n4H5huyClts?si=colaA_S19ipwIhDC",
      },
      fileArticle: {
        text: "The predict-AI interface is available through the app for patient to run risk assesments for the given datasets. Patients also have access the chatbot and their own past medical history. The  application calls the HealthAI-Predict API (https://healthaibackendtester.onrender.com) to assess patients risk of Heart disease, Lung cancer and Diabetes. Diabetes was used in place of colon cancer as there were no avaliable datasets to map a patients lifestyle to risk factors associated with colon cancer. Each of the Models return a boolean value as to wheter or not the patient is at risk of a disease. The prediction result and form data is then saved to firebase which acts as an entry in the patients medical history.",
      },
      fileInstructions: {
        title: "HealthAI-Predict Interface Faeatures",
        listElements: [
          "Allows patients to run risk reports",
          "Saves reports as medical history entries.",
          "Allows patients to access past medical reports.",
          "Allows patients to access ChatGPT chatbot.",
        ],
      },
    },

    "ratings-reviews": {
      fileHeader: {
        title: "Ratings & Reviews",
      },
      fileVideo: {
        title: "Ratings & Reviews Video",
        videoURL: "https://www.youtube.com/embed/ratings-reviews-video-url",
      },
      fileArticle: {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratings & Reviews content goes here.",
      },
      fileInstructions: {
        title: "Ratings & Reviews Instructions",
        listElements: [
          "Step 1: Lorem ipsum dolor sit amet.",
          "Step 2: Consectetur adipisicing elit.",
          "Step 3: Repellendus incidunt unde, dolor rerum deleniti.",
        ],
      },
    },

    "payment-of-subscription": {
      fileHeader: {
        title: "Payment of Subscription",
      },
      fileVideo: {
        title: "Payment of Subscription Video",
        videoURL:
          "https://www.youtube.com/embed/payment-of-subscription-video-url",
      },
      fileArticle: {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Payment of Subscription content goes here.",
      },
      fileInstructions: {
        title: "Payment of Subscription Instructions",
        listElements: [
          "Step 1: Lorem ipsum dolor sit amet.",
          "Step 2: Consectetur adipisicing elit.",
          "Step 3: Repellendus incidunt unde, dolor rerum deleniti.",
        ],
      },
    },
  },
};
