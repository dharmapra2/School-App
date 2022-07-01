<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    protected $table = 'teachers';
    protected $primaryKey = 'teach_id';
    protected $fillable = [
        'teach_name',
        'teach_email',
        'teach_qualification',
        'teach_contact',
        'teach_address',
        'teach_city', 'prin_id'
    ];
    // by teacher we will get principal data
    public function principal()
    {
        // belongsTo for one-to-many relationship on the child model
        return $this->belongsTo(Principal::class, 'prin_id');
    }
    // by teacher we will get students data
    public function students()
    {
        return $this->hasMany(Student::class, 'teach_id', 'teach_id');
    }
}
