public with sharing class UpdateRecordController {
    @AuraEnabled
    public static void updateRecord(String recordId, String newName) {
        Account acc = [SELECT Id, Name FROM Account WHERE Id = :recordId LIMIT 1];
        acc.Name = newName;
        update acc;
    }
}
