 # HEALTHAI

## Introduction
### Project Brief 
The recent surge in the cost of living, particularly in the healthcare sector, has created an impetus to drive down costs
through the use of standard AI-trained models and more specifically generative AI in the form of Large Language Models
(LLMs).
Furthermore, a societal transformation is taking place whereby healthcare professionals, and patients alike, are shifting
from reactive to predictive HealthAI care management. Rather than waiting for health problems to be manifested as life-
threatening conditions, AI technology enables the prediction of future health problems using datasets of patient
information.
This transformation in healthcare management has created an opportunity for your software development company to
develop applications for this lucrative medical sector. The objective of your start-up is to develop a bespoke system which
predicts the likelihood of someone contracting the serious medical conditions of heart disease, lung cancer and colon
cancer. As a method of fundraising your start-up, the team will charge subscribers a monthly fee. Payments will be made
using a payment processor such as PayPal Sandbox or Stripe.

### Key Features: 
The Project is divided into four components: HealthAI - App,HealthAI - Web, HealthAI - Predict and HealthAI - Docs.

### Usage
Each of HealthAI componets can be found in its own folder, and are deployed on the links listed below, to run the android app you must use android studio with an emulator, as it is not deployed anywhere.

## HealthAI - App
Healthai app is an android app developed in Java, using android studio. It allows users with the role patient to calculate the risk of illness based on lifestyle and prior medical history, chat with a chatbot which  has API Integration of an LLM (OpenAI’s chatGP) and contact their GP/Insurance comapany.

### HealthAI-App basic features include:
• Register/login: email and/or social media login option and accounts.
• Record details of patients' GP
• Record details of the insurance company
• Payment of subscription premium using Paypal, Stripe or another suitable payment processor
• Medical History: detailed forms capturing the information required by the machine
learning models in HealthAI-Predict.
• HealthAI-Predict Interface based on the user’s profile, HealthAI-Predict may be called to determine the patient's risk of contracting a range of illnesses.
• Request the professional ability to call the GP, or insurance company on record, from within the app
• Support forms to contact the insurance company or medical professional

## HealthAI - Web
### Live Link:  https://healthai-2deb8.web.app
Healthai web is an web app developed in Reactjs it allows medical professionals to use the HealthAI-predict Interface to run risk assessments for their patients, chat with a chatbot which has API Integration of an LLM (OpenAI’s chatGP) and aggregate new datasets based on patients medical histories.

### HealthAI-Web basic features include:
• Registration of medical professionals using email and/or social media login
• Access Restrictions: Professionals should only be able to see the details of their own patients
• HealthAI-predict Interface allows professionals to view their patient risk profiles
• User Profiling enables medical professionals to run reports establishing levels of risk for all categories
• Aggregation of new patient data. Using new patient information, the administrator should have the option to create and export new datasets by extending those used by HealthAI-Predict

## HealthAI - Predict
### Live Link:  https://healthaibackendtester.onrender.com 
Healthai Predict is an api developed using Python, we have used Flask for the server and have trained mulitple machine learning models with the sklearn library, all models use the LogisticRegression models. there are models included for predicting the chance if a patient is at risk for: Heart Disease, Lung Cancer and Diabetes.

### HealthAI-Predict basic features include:
• Simple API linking HealthAI-Predict backend with the HealthAI-App and HealthAI-Web applications
• Models, using publicly available datasets, which determine patient risk of heart disease, lung cancer and diabetes
• Reporting that displays the accuracy of each of these models

## HealthAI - Docs
### Live Link: https://healthaidocs.web.app  
Healthai Docs is an web app developed in Reactjs, it provides videos and explanations for all features across all of the components of healthAI, this is a custom group feature.


