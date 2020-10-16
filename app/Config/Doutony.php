<?php

namespace App\Config;


class Doutony extends BaseConfig
{
        /**
         * Nom de l'application
         */
        public $nameApp = "Doutony";

        /**
         * Nom de l'application
         */
        public $version = "1.0.0";

        /**
         * Url exclu dans les Filtres de l'application
         */
        public $urlExclusAdmin = ['login', 'reset-password', 'resetPassword', 'change-pass', 'changePassword', 'forgotPassword', 'forgot-password'];

       

        public $demo_admin = [
        [
            'name' => 'demo',
            'password' => 'demo',
            'email' => 'demo@example.com'
        ]
    ];

}