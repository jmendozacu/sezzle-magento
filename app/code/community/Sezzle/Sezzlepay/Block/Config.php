<?php

class Sezzle_Sezzlepay_Block_Config extends Mage_Core_Block_Template
{
    public function getMode()
    {
        return Mage::getStoreConfig('payment/sezzlepay/checkout_mode');
    }
}
