
# Manage Access to Data
In the previous step, you learned how
to Import Data From Your PLC. The
next important question to consider is: Who should have the rights to read and
write the data I've just imported into my project?You will find a comprehensive set of guides dedicated to these questions in
the Access Control section. However,
let's begin with a brief introduction to the topic to get you started.
- Check the default restrictions
Go to the Data View
and locate the HMI Data Explorer. Select the
variable you would like to manipulate and locate the
Restrictions property group on the right.[img:]**Read-Only by Default**By default, all users, including
anonymous ones, are allowed to read the imported
data. However, the ability to modify or write data is disabled for all
users. This security measure helps prevent unintentional exposure of
crucial PLC parameters.
- Allow manipulation
In order to allow some of your users to change data you need to explicitly
change the `Write value` restrictions.[img:]In this example only `Administrators` are allowed to change the
data.
- Restricting read access
**In this example,** only Administrators are allowed to read and see
the actual data.
