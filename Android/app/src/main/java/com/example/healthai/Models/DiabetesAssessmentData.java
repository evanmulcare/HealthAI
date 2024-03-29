package com.example.healthai.Models;

public class DiabetesAssessmentData implements AssessmentData {
    String Pregnancies, Glucose, BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age,date,result;

    public DiabetesAssessmentData() {
    }
    public DiabetesAssessmentData(String pregnancies, String glucose, String bloodPressure, String skinThickness, String insulin, String BMI, String diabetesPedigreeFunction, String age, String date, String result) {
        this.Pregnancies = pregnancies;
        this.Glucose = glucose;
        this.BloodPressure = bloodPressure;
        this.SkinThickness = skinThickness;
        this.Insulin = insulin;
        this.BMI = BMI;
        this.DiabetesPedigreeFunction = diabetesPedigreeFunction;
        this.Age = age;
        this.date = date;
        this.result = result;
    }

    @Override
    public String getType() {
        return "diabetes";
    }

    public String getPregnancies() {
        return Pregnancies;
    }

    public String getGlucose() {
        return Glucose;
    }

    public String getBloodPressure() {
        return BloodPressure;
    }

    public String getSkinThickness() {
        return SkinThickness;
    }

    public String getInsulin() {
        return Insulin;
    }

    public String getBMI() {
        return BMI;
    }

    public String getDiabetesPedigreeFunction() {
        return DiabetesPedigreeFunction;
    }

    public String getAge() {
        return Age;
    }

    @Override
    public String getDate() {
        return date;
    }

    @Override
    public String getResult() {
        return result;
    }

    public void setPregnancies(String pregnancies) {
        Pregnancies = pregnancies;
    }

    public void setGlucose(String glucose) {
        Glucose = glucose;
    }

    public void setBloodPressure(String bloodPressure) {
        BloodPressure = bloodPressure;
    }

    public void setSkinThickness(String skinThickness) {
        SkinThickness = skinThickness;
    }

    public void setInsulin(String insulin) {
        Insulin = insulin;
    }

    public void setBMI(String BMI) {
        this.BMI = BMI;
    }

    public void setDiabetesPedigreeFunction(String diabetesPedigreeFunction) {
        DiabetesPedigreeFunction = diabetesPedigreeFunction;
    }

    public void setAge(String age) {
        Age = age;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
