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
        </div>
    );
}

export default CompleteYourDetails;