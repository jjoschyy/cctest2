<?php

namespace App\Library;

/**
 * Description of ADAccess
 * 
 * Check if password for AD-User is valid. 
 * You have to add "@zeiss.com" to windows user account.
 * $successfulLogin = checkUserLogin("ivjschn@zeiss.com", "xxx");
 * echo $successfulLogin ? "Login successful" : "Login failed";
 *
 *
 * Read properties of any ZEISS user. For this action, you have
 * to "bind" with a valid user/password first. Currently the 
 * CN has to given in the format "lastname firstname userID". But you can
 * set differnt filter options (see $filter) for finding a user accout.
 * showUserProperties("Brenner Daniel IVDBRENN", "ivjschn@zeiss.com", "xxx");
 *
 */
class ADAccess {

    public function checkUserLogin($username, $password) {
        $ds = $this->createLdapConnection();
        $userCheck=$this->bindUserToConnection($ds, $username, $password);
        ldap_close($ds);
        return $userCheck;        
    }

    public function showUserProperties($cn, $username, $password) {
        $ds = $this->createLdapConnection();
        $this->bindUserToConnection($ds, $username, $password);
        $dn = "CN=" . $cn . ",OU=Users,OU=01DEOKO,OU=01DE,OU=01,OU=AGC,DC=cznet,DC=zeiss,DC=org";

        // this command requires some filter
        $filter = "(objectclass=*)";

        //the attributes to pull, which is much more efficient than pulling all attributes if you don't do this
        $sr = ldap_read($ds, $dn, $filter);
        $entry = ldap_get_entries($ds, $sr);

        echo "<br><br><br><b>All fields/values for " . $cn . "</b>";

        $i = 0;
        foreach ($entry[0] as $child) {
            $i++;
            echo "<br><br>";
            echo var_dump($child);
        }
        ldap_close($ds);
    }

    public function createLdapConnection() {
        return ldap_connect('DEOKOSDC023.cznet.zeiss.org');
        // Set protocol version for Active Directory
        //ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);
    }

    public function bindUserToConnection($ds, $username, $password) {
        return (!ldap_bind($ds, $username, $password)) ? false : true;
    }

}
