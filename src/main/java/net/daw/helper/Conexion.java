/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.daw.helper;

public class Conexion {

    public static enum Tipo_conexion {

        DataSource,
        DriverManager
    };

    public static Tipo_conexion getConection() {
        return Tipo_conexion.DataSource;
    }

    public static String getDatabaseName() {
        return "beaversrace";
    }

    public static String getDatabaseLogin() {
        return System.getenv("OPENSHIFT_MYSQL_DB_USERNAME");
    }

    public static String getDatabasePassword() {
        return System.getenv("OPENSHIFT_MYSQL_DB_PASSWORD");
    }

    public static String getDatabasePort() {
        return System.getenv("OPENSHIFT_MYSQL_DB_PORT");
    }

    public static String getDatabaseHost() {
        return System.getenv("OPENSHIFT_MYSQL_DB_HOST");
    }
    
}
