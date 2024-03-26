import TextField from '@mui/material/TextField';
import { useState } from "react";

import { Button } from '@/button/Button';

// load the .env
require('dotenv').config();

type TrialFormState = {
  email_id: string;
  pdf_url?: string;
  search_tags?: string;
};

const TrialForm = ( { ispdf , istags } : { ispdf?: boolean, istags?: boolean }) => {
  const [formState, setFormState] = useState<TrialFormState>({
    email_id: "",
    pdf_url: "",
    search_tags: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_PAT}`, // {token} should be replaced with the actual token
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "fields": {
          "email_id": formState.email_id,
          "pdf_url": formState.pdf_url,
          "search_tags": formState.search_tags
        }
      })
    }).then((res) => res.json());
    if (response.id) {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <div>
        <h1>Success!</h1>
      </div>
    );
  }

  return (
    <form className='flex w-full flex-col items-center justify-center' onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Email ID" 
        variant="filled"
        type="email"
        name="email_id"
        placeholder="Email"
        value={formState.email_id}
        onChange={handleChange}
        required
        className='m-2 w-full'
      />
      { ispdf &&
        <TextField
        id="outlined-basic"
        label="PDF URL"
        variant="filled"
        type="text"
        name="pdf_url"
        placeholder="PDF URL"
        value={formState.pdf_url}
        onChange={handleChange}
        className='m2 w-full'
      />}
      { istags &&
        <TextField  
        id="outlined-basic"
        label="Search Tags"
        variant="filled"
        type="text"
        name="search_tags"
        placeholder="Separate tags with commas"
        value={formState.search_tags}
        onChange={handleChange}
        className='m-2 w-full'
      />}
      <button type="submit" className='m-4 flex w-full flex-row justify-start'>
        <Button>
          Submit
        </Button>
      </button>
    </form>
  );
};

export { TrialForm };