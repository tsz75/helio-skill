
# Meet FDA 21 CFR Part 11 Requirements With HELIO
FDA 21 CFR Part 11 is a key regulation that the US Food and Drug
Administration (FDA) issued in 1997. It lays out the rules for electronic
records and signatures and explains when they're seen as equal to paper
records in industries like:
- Pharmaceutical manufacturing
- Biotechnology
- Medical devices
- Food production
- Healthcare
If you're working on products for one of these industries, this guide is for
you. It'll help you understand the steps of meeting FDA 21 CFR Part 11
requirements and where HELIO can help you achieve compliance.
While this documentation focuses on **FDA 21 CFR Part 11**, many of the
principles on this page apply to **EU GMP Annex 11** for European operations.
Although they differ in scope and regulatory status, both
frameworks share similar goals around data integrity, audit trails, and system
access controls.

## Goals & Intentions
The main goal of of the FDA 21 CFR Part 11 is to ensure the integrity, security,
and traceability of electronic systems used in industries critical to public
health and safety. In simpler words: the regulation is all about making sure that electronic
systems used in important industries are safe, secure, and can be traced.
Validate Electronic Systems
Ensure electronic systems used in regulated industries are robust, accurate, and reliable.
Protect Data Integrity
Prevent unauthorized access, modification, or deletion of critical electronic records.
Establish Accountability
Create a clear, auditable trail of who did what and when in electronic systems.
Modernize Record-Keeping
Provide a framework for transitioning from paper-based to electronic record-keeping while maintaining regulatory compliance.

## You Can't Purchase Compliance
Many organizations mistakenly believe that purchasing "compliant" software
satisfies FDA 21 CFR Part 11 requirements. The reality is more comprehensive, as
the regulation requires three levels of control:
- Administrative controls: e.g. policies for Part 11 and electronic signatures
- Procedural controls: Standard Operation Procedures for system use
- Technical controls: functionality built into software that ensures the reliability and integrity of electronic
records and signatures

### No HMI Software is Automatically Compliant With FDA 21 CFR Part 11
- It is not possible for any supplier to offer a turnkey 21 CFR Part 11
compliant
system.
- While software can provide technical controls, you remain responsible for
implementing the administrative and procedural controls that make your system
fully compliant.

### Your HMI Is Part of a Larger Validation Object
- HELIO is an engineering software for creating and executing HMIs.
- These HMIs operate within a larger validation object: your complete system, machine, or facility.
- The entire system gets validated and approved – not just the HMI engineering software alone.

### HELIO Gives You the Technical Controls You Need
We designed HELIO with features that support the technical controls you need,
making your compliance implementation process more straightforward.

## Open vs. Closed Systems
According to 21 CFR Part 11, there are two distinct approaches to record keeping
and data management:

### Closed Systems
Impose limitations on platform access and control the modification of data.

### Open Systems
Permit multiple users to access and modify data on a single
platform.

### HELIO Lets You Build Closed Systems
- HELIO HMIs can be run in browser kiosk mode, which is a limited, stripped-down
full-screen mode that creates a controlled, closed system environment. In this
mode, users only have access to the HMI web application. They cannot access
the underlying operating system, file system, or other applications.
- This browser-based containment ensures that operators can interact exclusively
with your approved HMI interface, meeting the access control requirements
essential for 21 CFR Part 11 compliance. Learn more about HELIO's
architecture.
- In addition, HELIO offers multi-user functionality and sophisticated access control mechanisms
, allowing you to precisely manage who has the ability to control,
access, monitor, and observe your machine. In summary, leveraging these tools
enables you to construct the HMI as a closed system using HELIO.

## Key Aspects of FDA 21 CFR Part 11 Compliance

### 1. Electronic Records

#### 1.1 Identify Electronic Records

### What the Regulation Specifies
The regulation focuses on ensuring the trustworthiness, reliability, and
equivalence of electronic records to paper records.
- Electronic record means any combination of text, graphics, data, audio,
pictorial, or other information representation in digital form that is created,
modified, maintained, archived, retrieved, or distributed by a computer system.
- The regulations require the ability to generate accurate and complete
copies of records in both human readable and electronic form suitable for
inspection, reviewing, and copying.

### What Tools HELIO Offers
- The following electronic records can be created within HELIO HMIs:
  - Recipes
  - Messages
  - Data Collections
  - Audit Trail
- All of the records above can be exported in both human and machine readable formats:
  - Export Recipes Action
  - Export Message Archive Action
  - Export Data Collections
  - Export Audit Trail Action

#### 1.2 Record Modifications

### What the Regulation Specifies
- 21 CFR Part 11 mandates the use of secure, computer-generated,
time-stamped audit trails.
- These audit trails must independently record the date and time of operator
entries and actions that create, modify, or delete electronic records.

### What Tools HELIO Offers
- **Built-in Audit Trail to Record Modifications**
  - HELIO has a built-in audit trail that can be activated to record all
system interactions and modifications to electronic records.
  - Learn more using the
Setup An Audit Trail guide.
- **Automated Capture of Time-Stamped Events**
  - Entries and actions involved in the creation, modification, or
deletion of electronic records will be time stamped automatically.
  - See
Export Audit Trail Action for details about the
timestamp format.

#### 1.3 Process Flow Control

### What the Regulation Specifies
- The regulation mandates the use of operational system checks to enforce
permitted sequencing of steps and events.
- Systems must ensure that processes follow the correct order and prevent
users from skipping required steps or performing actions out of sequence.

### What Tools HELIO Offers
HELIO allows you to build interfaces that guide operators through proper
workflows and enforce correct step sequencing.
- Utilize the following actions to implement safety checks:
  - Show Dialog Action
  - Confirm and Execute Critical Action
- Use the following elements to build step-by-step workflows:
  - Page Group
  - Tab Group
  - Navigate to Page Action

#### 1.4 Data Source Validity

### What the Regulation Specifies
The regulation calls for device checks, where appropriate, to determine the
validity of the source of data input or operational instruction.

### What Tools HELIO Offers
Ensure the validity of data sources by establishing secure and encrypted
connections to data sources such as your PLC using the OPC UA Connection.

#### 1.5 Personnel Qualifications and Training

### What the Regulation Specifies
The regulation mandates that organizations must determine that persons who
develop, maintain, or use electronic record systems have the education,
training, and experience to perform their assigned tasks.

### How HELIO Helps
- HELIO is being developed by an experienced team of computer science and
software development specialists following a robust development process.
- HELIO's no-code, web-based platform reduces the technical expertise
barrier for HMI development.
- HELIO's intuitive interface allows more team members to quickly learn
how to use the system with minimal specialized training.
- HELIO's detailed and accessible online documentation simplifies the process of
training your personnel and developing the appropriate qualifications.

#### 1.6 Documentation and Change Management

### What the Regulation Specifies
21 CFR Part 11 requires a structured approach to manage systems documentation.
- This means controlling who can access, distribute, and use documentation
for operation and maintenance.
- It also means tracking all changes to show how documentation evolves over
time.

### How HELIO Helps
- We maintain a comprehensive online documentation that is automatically
generated and version-controlled for each software release. This
centralized documentation system ensures controlled distribution and
access to current system operation and maintenance information.
- We publish detailed release notes that document all software changes in
chronological order, creating a changelog of system modifications.

### 2. Electronic Signatures

### What the Regulation Specifies
The FDA's 21 CFR Part 11 regulation establishes requirements for electronic
signatures that mirror their real-life counterparts.

### Not Supported Yet
- This feature is not yet supported by HELIO.
- If you are interested in this feature, please contact our team.

### 3. Access Control

### What the Regulation Specifies
A robust user management system should be implemented that includes:
- Unique User Identification: Each user must have a unique identifier.
- Password Protections: Strong password policies.
- Role-Based Access Control: Limiting system access based on user roles.

### What Tools HELIO Offers
- **Built-In Access Control**
  - HELIO offers a multi-layered access control that goes beyond traditional
page-level restrictions, providing granular control over both user
interface elements and underlying data access.
  - It allows you to restrict
access to critical pages, element and data according to the
Principle of Least Privilege.
  - HELIO offers the ability to establish a set of rules that'll be
enforced when HMI users create or change their passwords. See
Authentication & Security Settings for more details.
- **Role-Based Authorization**
  - HELIO's role-based access control system allows precise definition of user permissions.
  - Use it to ensure users can only access and interact with resources directly
relevant to their specific roles and responsibilities.
- **Audit Ready Authentication Events**
  - Changes to users and permissions can be recorded in the audit trail.
  - Refer to the
Audit Trail Settings for a complete
list of authentication events that can be tracked.
Learn more using the
Access Control
guide.

### 4. Audit Trail

### What the Regulation Specifies
A comprehensive audit trail is critical for compliance. Any changes to
quality-related settings and electronic records must be recorded in the
audit trail. The audit trail should:
**Record all significant events** such as:
- User logins and logouts
- Record creations and modifications
- Deletion attempts
- Configuration changes
**Capture detailed event information**
- User ID
- Timestamp
- Nature of the action
- Specific changes made

### What Tools HELIO Offers
- **Built-in Audit Trail With Audit-Ready Events**
  - The built-in audit trail captures all of these events and their meta
data accordingly.
  - Refer to the
Audit Trail Settings for a complete
list of events that can be tracked.
- **Ability to Record Custom Application- or Industry-Specific Events**
  - On top of that the
Record Audit Trail Event Action can be used to
record additional, application specific events.
Learn more using the
Setup An Audit Trail
guide.

### 5. Data Integrity

### What the Regulation Specifies
Ensure your electronic records:
- Cannot be altered without detection.
- Provide complete and accurate representations of original records.
- Maintain secure, time-stamped audit trails.

### What Tools HELIO Offers
HELIO stores all its data in the
Data Directory. It is your responsibility to:
- Ensure that this directory cannot be accessed
or modified by unauthorized individuals using the security mechanisms
of your operating system.
- Ensure that the operating system on which HELIO runs cannot be accessed
from outside using robust security mechanisms, such as robust authentication
and authorization at the operating system level, as well as firewalls.
As we mentioned before, you can set up the system so that it can only be
accessed using the HMI that is running inside a web browser. In other words:
HELIO lets you set up the HMI as a closed system, which provides a high
level of security.
- **Access Control and Data Isolation**
  - HELIO provides a built-in authentication and authorization system that
ensures only authorized personnel can access, modify, or view sensitive
system data.
  - Learn more using the Access Control guide.
- **Backup Data as CSV**
  - HELIO provides the functionality to export the audit trail to standardized
CSV files for backing up critical compliance records.
  - This ensures that the
records are easily preserved and retrievable and cannot be altered.
  - See Export Audit Trail Action for more details.

### 6. Retention and Retrieval of Audit Records

### What the Regulation Specifies
Electronic records must be available for inspection, review, and copying
throughout their retention period.

### What Tools HELIO Offers
- **Web Browser Based Access**
  - Visualize the audit trail from within the HMI using the built-in
Audit Trail Page.
  - Because HELIO HMIs are web-based and responsive by default, external
clients can access and export the audit trail.
- **CSV Export**
  - HELIO offers the ability to export the Audit Trail into standardized CSV
files for storing backups, ensuring your critical compliance records are
easily preserved and retrievable.
  - See
Export Audit Trail Action for more details.

## Things to Keep in Mind When Implementing Compliance

### Documentation
Maintain comprehensive documentation:
- System design specifications
- Validation protocols
- Standard Operating Procedures (SOPs)
- Training records
- Maintenance and change control logs

### Ongoing Compliance
Compliance is not a one-time effort. So make sure to implement:
- Regular system audits
- Continuous monitoring
- Periodic risk assessments
- Updated validation documentation

## Practical Steps for HMI Software Compliance

### 1. Assess Current System
- Identify gaps in current compliance
- Develop a comprehensive compliance strategy

### 2. Implement Robust Security Measures
- Multi-factor authentication
- Encrypted data storage
- Secure user management

### 3. Develop Comprehensive Audit Trail
- Implement detailed logging
- Ensure non-modifiable record keeping
- Create clear audit trail reports

### 4. Train Personnel
- Develop thorough training programs
- Ensure understanding of compliance requirements
- Maintain training documentation

### 5. Consultation and Support
Achieving FDA 21 CFR Part 11 compliance is complex.
- Consult FDA compliance experts
- Engage with regulatory compliance specialists
Mission accomplished!
You learned a lot about getting your product ready for FDA 21 CFR Part 11
approval. Now go build robust and secure systems with straightforward HMIs.
