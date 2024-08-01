import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    message: "",
  });
  const change=(e)=>{
    const {name,value}=e.target;
    setValues({...values,[name]:value})
  }
  const handleSubmit =()=>{
    if(values.first_name ==="" || values.last_name=== "" || values.phone==="" || values.country === "" || values.message === ""){
      alert("All Feilds Are Required")
    }else{
      console.log(values);
      // setValues({
      //   first_name: "",
      //   last_name: "",
      //   phone: "",
      //   country: "",
      //   message: "",
      // })
    }
  }
  return (
    <div className='mt-6'>
      <h1 className='text-3xl font-semibold  ml-12  text-gray-400'>
        Get in touch{" "}
      </h1>
      <div className='flex flex-col justify-center p-3 max-w-lg mx-auto'>
        <div className='flex-auto'>
          <form className='flex flex-col gap-4' onClick={handleSubmit}>
            <p className='text-lg  font-serif font-semibold text-center text-teal'>
              Write us a query
            </p>
            <div>
              <Label className='font-semibold ml-2 tracking-wider text-blue-600'>
                First Name
              </Label>
              <TextInput
                type='text'
                placeholder='Enter Your First Name'
                id='first_name'
                className='block w-full mt-1 rounded-md'
                name='first_name'
                value={values.first_name}
                onChange={change}
              />
            </div>
            <div>
              <Label className='font-semibold ml-2 tracking-wider text-blue-600'>
                Last Name
              </Label>
              <TextInput
                type='text'
                placeholder='Enter Your Last Name'
                id='last_name'
                className='block w-full mt-1 rounded-md'
                name='last_name'
                value={values.last_name}
                onChange={change}
              />
            </div>
            <div>
              <Label className='font-semibold ml-2 text-blue-600 tracking-wider'>
                Phone No
              </Label>
              <TextInput
                type='number'
                placeholder='Enter Your Phone No'
                id='phone'
                className='block w-full mt-1  rounded-md'
                name='phone'
                value={values.phone}
                onChange={change}
              />
            </div>
            <div>
              <Label className='font-semibold ml-2 text-blue-600 tracking-wider'>
                Country
              </Label>
              <TextInput
                type='text'
                placeholder='Enter Your Country Name'
                id='country'
                className='block w-full mt-1  rounded-md'
                name='country'
                value={values.country}
                onChange={change}
              />
            </div>
            <div>
              <Label className='font-semibold ml-2 text-blue-600 tracking-wider'>
                Message
              </Label>
              <textarea
                placeholder='Enter Your Message'
                id='message'
                className='block w-full mt-1 p-2 border border-gray-300 rounded-md'
                name='message'
                value={values.message}
                onChange={change}
                rows='4'
              />
            </div>
            <Button
              type='submit'
              className='py-2 sm:mb-12 px-4 bg-gradient-to-l from-cyan-500 to-blue-200 text-white rounded-md hover:from-cyan-600 hover:to-blue-900'
            >
              Connect with us
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
