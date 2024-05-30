import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const dataPost = await request.json();
    const data = {...dataPost, data: new Date()}
    console.log('Received data:', data);


    const dataDirectory = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDirectory, 'formData.json');


    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory);
      console.log('Created directory:', dataDirectory);
    }
    let existingData = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      existingData = JSON.parse(fileContent);
    }
    if (!Array.isArray(existingData)) {
        existingData = [];
      }


    existingData.push(data);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    console.log('Data saved successfully:', data);

    return NextResponse.json({ message: 'Data saved successfully' });
  } catch (err) {
    console.error('Error saving data:', err);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}

