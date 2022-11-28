<?php

namespace App\Http\Controllers\Api;
use App\Models\Gym;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GymController extends Controller
{
    
    public function index()
    {
       $gym = Gym::all();
       return $gym;
    }

    public function store(Request $request)
    {
       $gym =  new Gym ();
       $gym->name = $request->name;
       $gym->lname = $request->lname;
       $gym->gender = $request->gender;
       $gym->age = $request->age;
       $gym->phone = $request->phone;

       $gym -> save();
    }

     
    public function show($id)
    {
        $gym = Gym::find($id);
        return $gym;
    }

    public function update(Request $request, $id)
    {
         
        $gym = Gym::findOrFail($request->id);
        $gym->name = $request->name;
       $gym->lname = $request->lname;
       $gym->gender = $request->gender;
       $gym->age = $request->age;
       $gym->phone = $request->phone;

       $gym ->save();
       return $gym;
    }

   
    public function destroy($id)
    {
        $gym =Gym::destroy($id);
        return $gym;
    }
}
