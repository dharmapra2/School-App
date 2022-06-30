<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $table = 'students';
    protected $primaryKey = 'stud_id';
    protected $fillable = [
        'stud_name',
        'stud_email',
        'stud_class',
        'stud_ph_no',
        'father_name',
        'mother_name',
        'teach_id',
    ];
}
