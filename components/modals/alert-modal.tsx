"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface alertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<alertModalProps> = ({
  isOpen, onClose, onConfirm, loading
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
    <Modal title="Deseja mesmo fazer isso?" description="Essa ação não poderá ser desfeita"
      isOpen={isOpen} onClose={onClose}>
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant='outline' onClick={onClose}>
          Cancelar
        </Button>
        <Button disabled={loading} variant='destructive' onClick={onConfirm}>
          Continuar
        </Button>
      </div>
    </Modal>
  )
}