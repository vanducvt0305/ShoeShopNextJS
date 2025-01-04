import axios from "axios";
import {NextResponse} from 'next/server';

export async function GET(req) {
    // mock data
    // const res = [
    //     {
    //         id: 1,
    //         name: "Phuong"
    //     },
    //     {
    //         id: 2,
    //         name: "Thy"
    //     }
    // ]
    // return NextResponse.json(res, {status:200});

    // call api
    try {
        // console.log(req);
        // B1: lấy url từ request
        const url = new URL(req.url);

        // B2: lấy query từ url
        const params = new URLSearchParams(url.search);

        // B3: lấy keyword từ params
        const keyword = params.get('keyword');
        console.log("keyword", keyword);

        // kiểm tra value của keyword
        // case 1: keyword = null => lấy tất cả sản phẩm
        // case 2: keyword != null => lấy sản phẩm theo keyword
        let uri = `https://apistore.cybersoft.edu.vn/api/Product`;
        if(keyword) {
            uri += `?keyword=${keyword}`;
        }

        const res = await axios.get(uri);
        return NextResponse.json(res.data.content, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Could not fetch data"}, {status: 500});
    }
}

export async function POST() {
    
}

export async function PUT() {
    
}

export async function DELETE() {
    
}