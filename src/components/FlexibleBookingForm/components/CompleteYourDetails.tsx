import TextInput from "@/components/ui/textinput";

function CompleteYourDetails() {
    return (  
        <div className="py-10">
            Complete Your Details @Sharon


            <div>
                <TextInput label="First Name" placeholder="Enter Your First Name"
                type="text" name="first-name"
                />
            </div>


            <div>
                <TextInput label="Last Name" placeholder="Enter Your Last Name"
                type="text" name="Last-name"
                />
            </div>


            <div>
                <TextInput label="Date of Birth" placeholder="Enter Your Date of Birth"
                type="drop box" name="Date-of-birth"
                />
            </div> 


            <div>
                <TextInput label="Email" placeholder="example@gmail.comm"
                type="text" name="Email"
                />
            </div>


            <div>
                <TextInput label="Phone Number" placeholder="000 000 0000"
                type="text" name="Phone-Number"
                />
            </div>


            <div>
                <TextInput label="Where are you travelling from?" placeholder="eg Accra"
                type="text" name="Location"
                />
            </div>


            <div>
                <TextInput label="Driver's License Number" placeholder="0000 0000"
                type="text" name="License-Number"
                />
            </div>


            <div>
                <TextInput label="Driver's License Date of Expiry" 
                type="Drop-box" name=" Date-of-Expiry"
                />
            </div>

            <div>
                <TextInput label="Ghana Card Number" 
                type="Text" name="Ghana-Card-Number"
                />
            </div>
        </div>
    );
}

export default CompleteYourDetails;