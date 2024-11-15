public with sharing class MyController {
    @AuraEnabled
    public static void performDmlOperation() {
        // Create a new Account record (you can modify this to perform any DML operation as needed)
        Account acc = new Account(Name='Testabc');
        insert acc;
    }
}